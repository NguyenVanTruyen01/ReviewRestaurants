import { HttpException, HttpStatus, Injectable, Res } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserModel, UserSchema } from "../../users/models/user.model";
import { CreateUserDto } from "../../users/dto/create-user.dto";
import { Response } from "express";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

@Injectable({})
export class AuthService {

  constructor(
    @InjectModel("User") private userModel: Model<UserModel>) {
  }

  async signup(createUserDto: CreateUserDto) {

    try {
      const newUser = new this.userModel(createUserDto);

      const user = await newUser.save();

      if (!user) {
        throw new HttpException({
          success: false,
          message: "Can't add new account"
        }, HttpStatus.NOT_ACCEPTABLE);
      }

      return {
        success: true,
        user,
        message: "Successfully registered"
      };
    } catch (err) {
      throw new HttpException({
        success: false,
        message: "Email was registered. Please use another email"
      }, HttpStatus.BAD_REQUEST);
    }

  }


  async login(loginAuthDto) {
    const { email, password } = loginAuthDto;

    try {
      const user = await this.userModel.findOne({ email: email });

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
          const token = await jwt.sign({ userID: user._id, userEmail: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_TIME });

          return {
            success: true,
            user,
            token,
            message: " Login successfully"
          };

        } else {
          throw  new HttpException({
            success: false,
            message: "Incorrect password"
          }, HttpStatus.BAD_REQUEST);
        }

      } else {
        throw  new HttpException({
          success: false,
          message: "Account does not exist"
        }, HttpStatus.NOT_FOUND);
      }
      
    } catch (err) {
      throw  new HttpException({
        success: false,
        message: err.message
      }, HttpStatus.SERVICE_UNAVAILABLE);
    }

  }
}