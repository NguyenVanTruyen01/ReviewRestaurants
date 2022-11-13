import {HttpException, HttpStatus, Injectable, Query} from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserModel } from "../models/user.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {FollowUserDto} from "../dto/follow-user.dto";

@Injectable()
export class UsersService {

  constructor(
      @InjectModel('User') private readonly userModel: Model<UserModel>
) {
  }

  async findAll() {
    try {
      const users = await this.userModel.find();
      return {
        success: true,
        users: users,
      };
    }catch (err){
      throw new HttpException({
      success: false,
      message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)
    }

  }

  async findOne(id: string) {
    try{
      const user = await  this.userModel.findById({_id : id})
      if(user){
        return {
          success: true,
          user,
        }
      }else {
        throw new HttpException({
          success: false,
          message: `Can't find user with id : ${id}`
        }, HttpStatus.NOT_FOUND)
      }
    }catch (err){
      throw new HttpException({
        success: false,
        message: err.message,
      }, HttpStatus.NOT_FOUND)
    }
  }

  async searchUsers(@Query('key') key){

    const users = await this.userModel.find(
        {lastName: {$regex: key, '$options': 'i'}}
    )

    return {
      success: true,
      users
    }

  }


  async update(id: string, updateUserDto: UpdateUserDto) {

    if(id === updateUserDto._id){
      try {
        const user = await this.userModel.findByIdAndUpdate(id,updateUserDto,{new :true});
        if(!user){
          throw new HttpException({
            success: false,
            message: "Update user fail"
          }, HttpStatus.BAD_REQUEST)

        }
        return {
          success: true,
          user,
          message: "Update user successfully"
        }

      }catch (err){
        throw new HttpException({
          success: false,
          message: err.message
        }, HttpStatus.BAD_REQUEST)
      }
    }
    else{
      throw new HttpException({
        success: false,
        message: "Action forbidden"
      }, HttpStatus.FORBIDDEN)
    }

  }

  async remove(id: string) {
    try {
      const user = await this.userModel.findByIdAndDelete({_id: id});
      if(!user){
        throw new HttpException({
          success: false,
          message: `Can't remove user with id: ${id}`
        }, HttpStatus.FORBIDDEN)
      }

      return {
        success: true,
        message: "Remove user successfully"
      }
    }catch (err){
      throw new HttpException({
        success: false,
        message: err.message,
      }, HttpStatus.SERVICE_UNAVAILABLE)
    }
  }

  // follow and unfollow
  async follow (id: string, followUserDto : FollowUserDto){
    const _id = followUserDto._id;

    if(id === _id){
      throw new HttpException({
        success: false,
        message: "Action forbidden"
      }, HttpStatus.FORBIDDEN)
    }
    else {

      try {

        const currentUser = await this.userModel.findById(_id);
        const followUser = await  this.userModel.findById(id);

        console.log("dsadas" + id)
        console.log(_id)

        if (!currentUser.following.includes(id)){
          await currentUser.updateOne({$push:{following: id}},{new:true})
          await followUser.updateOne({$push: {followers: _id}},{new:true})

          throw new HttpException({
            success: true,
            message: "Followed user"
          }, HttpStatus.OK)
        }

        else {
          await currentUser.updateOne({$pull: {following: id}},{new:true})
          await followUser.updateOne({$pull: {followers: _id}},{new:true})

          throw new HttpException({
            success: true,
            message: "Unfollowed user"
          }, HttpStatus.OK)
        }

      }catch (err){
        throw new HttpException({
          success: false,
          message: err.message,
        }, HttpStatus.SERVICE_UNAVAILABLE)
      }

    }

  }
}
