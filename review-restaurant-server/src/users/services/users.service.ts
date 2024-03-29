import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  Query,
} from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserModel } from '../models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FollowUserDto } from '../dto/follow-user.dto';
import {find} from "rxjs";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserModel>,
  ) {}

  async findAll() {
    //Tim theo role RESTAURANT
    try {
      const users = await this.userModel.find({role: "RESTAURANT"});
      return {
        success: true,
        users: users,
      };
    } catch (err) {
      throw new HttpException(
        {
          success: false,
          message: 'Server error. Please try again',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.userModel.findById({ _id: id })
          .populate("followers following", "avatar userName ");
      if (user) {
        return {
          success: true,
          user,
        };
      } else {
        throw new HttpException(
          {
            success: false,
            message: `Can't find user with id : ${id}`,
          },
          HttpStatus.NOT_FOUND,
        );
      }
    } catch (err) {
      throw new HttpException(
        {
          success: false,
          message: err.message,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async searchByUserName(@Query('key') key) {
    const users = await this.userModel.find({
      userName: { $regex: key, $options: 'i' },
    });

    return {
      success: true,
      users,
    };
  }

  async searchManyFields(@Body() search) {
    try {
      const { key, regions, benefits, minPrice, maxPrice, purposes } = search;

      const query = {};

      if (key) {
        query['userName'] = { $regex: key, $options: 'i' };
      }

      if (regions) {
        let keywords = regions,
          regex = keywords.join('|');

        query['address'] = {
          $regex: regex,
          $options: 'i',
        };

        // query["address"] =  {$regex: regions, '$options': 'i'}
      }

      if (purposes.length > 0) {
        query['infoRestaurant.characteristics'] = { $all: purposes };
      }

      if (benefits.length > 0) {
        query['infoRestaurant.utilities'] = { $all: benefits };
      }

      if (minPrice !== -1) {
        query['infoRestaurant.minPrice'] = { $lte: maxPrice };
      }

      if (maxPrice !== -1) {
        query['infoRestaurant.maxPrice'] = { $lte: maxPrice };
      }

      console.log(query)

      const users = await this.userModel.aggregate([
          {$match: query},
          { "$addFields": { "rateAvg": { "$avg": "$rating" } }}, { "$sort": { "rateAvg": -1 } } ]
      );

      // const users = await this.userModel.find(query);

      return {
        amount: users.length,
        success: true,
        users,
      };
    } catch (err) {
      throw new HttpException(
        {
          message: 'Server is error',
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {

    if (id === updateUserDto.currentUserId) {
      try {
        const user = await this.userModel.findByIdAndUpdate(id,
            updateUserDto
         , {
          new: true,
        });


        if (!user) {
          throw new HttpException(
            {
              success: false,
              message: 'Update user fail',
            },
            HttpStatus.BAD_REQUEST,
          );
        }
        return {
          success: true,
          user,
          message: 'Update user successfully',
        };
      } catch (err) {
        throw new HttpException(
          {
            success: false,
            message: err.message,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    } else {
      throw new HttpException(
        {
          message: 'Action forbidden',
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async remove(id: string) {
    try {
      const user = await this.userModel.findByIdAndDelete({ _id: id });
      if (!user) {
        throw new HttpException(
          {
            success: false,
            message: `Can't remove user with id: ${id}`,
          },
          HttpStatus.FORBIDDEN,
        );
      }

      return {
        success: true,
        message: 'Remove user successfully',
      };
    } catch (err) {
      throw new HttpException(
        {
          success: false,
          message: err.message,
        },
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  // follow
  async follow(id: string, followUserDto: FollowUserDto) {
    const _id = followUserDto.currentUserId;

    if (id === _id) {
      throw new HttpException(
        {
          success: false,
          message: 'Action forbidden',
        },
        HttpStatus.FORBIDDEN,
      );
    } else {
      try {
        const currentUser = await this.userModel.findById(_id);
        const followUser = await this.userModel.findById(id);

        if (!currentUser.following.includes(id)) { //chưa follow
          await currentUser.updateOne(
            { $push: { following: id } },
            { new: true },
          );
          await followUser.updateOne(
            { $push: { followers: _id } },
            { new: true },
          );

          return {
            success: true,
            message: 'Followed user',
          };
        } else {

          throw new HttpException(
              {
                success: false,
                message: 'You followed this user',
              },
              HttpStatus.BAD_REQUEST,
          );
        }
      } catch (err) {
        throw new HttpException(
          {
            success: false,
            message: err.message,
          },
          HttpStatus.SERVICE_UNAVAILABLE,
        );
      }
    }
  }

  //  unfollow
  async unFollow(id: string, followUserDto: FollowUserDto) {
    const _id = followUserDto.currentUserId;

    if (id === _id) {
      throw new HttpException(
          {
            success: false,
            message: 'Action forbidden',
          },
          HttpStatus.FORBIDDEN,
      );
    } else {
      try {
        const currentUser = await this.userModel.findById(_id);
        const followUser = await this.userModel.findById(id);

        if (currentUser.following.includes(id)) {
          await currentUser.updateOne(
              { $pull: { following: id } },
              { new: true },
          );
          await followUser.updateOne(
              { $pull: { followers: _id } },
              { new: true },
          );

          return {
            success: true,
            message: 'Unfollowed user',
          };
        } else {
          throw new HttpException(
              {
                success: false,
                message: `You can't unfollow this user`,
              },
              HttpStatus.BAD_REQUEST,
          );
        }
      } catch (err) {
        throw new HttpException(
            {
              success: false,
              message: err.message,
            },
            HttpStatus.SERVICE_UNAVAILABLE,
        );
      }
    }
  }

  async deleteAllUser() {
    await this.userModel.deleteMany();
    return {
      success: true,
      message: 'Delete all users successfully',
    };
  }
}
