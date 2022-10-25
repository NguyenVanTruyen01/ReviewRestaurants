import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserModel } from "../models/user.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly userModel: Model<UserModel> ) {
  }

  async create(createUserDto: CreateUserDto) {
    const newUser= await this.userModel.create(createUserDto);
    return newUser;
  }

  async findAll() {
    const listUser = await this.userModel.find();
    return listUser;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
