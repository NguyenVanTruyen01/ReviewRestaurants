import {HttpException,HttpStatus, Injectable} from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserModel } from "../models/user.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly userModel: Model<UserModel> ) {
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
      const user = await  this.userModel.findOne({_id : id})
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

  async update(id: string, updateUserDto: UpdateUserDto) {
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

  async remove(id: string) {
    try {
      const user = await this.userModel.deleteOne({_id: id});
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
}
