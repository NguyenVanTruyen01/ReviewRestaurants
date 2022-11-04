import {HttpException, HttpStatus, Injectable, Req, Res} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserModel, UserSchema } from "../../users/models/user.model";
import { CreateUserDto } from "../../users/dto/create-user.dto";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import {Request, Response} from "express";
import {LoginAuthDto} from "../dto/login-auth.dto";

@Injectable({})
export class AuthService {

  constructor(
    @InjectModel("User") private userModel: Model<UserModel>) {
  }

  async signup(createUserDto: CreateUserDto, @Res({ passthrough: true }) response: Response) {

    try {
      const newUser = new this.userModel(createUserDto);
      const user = await newUser.save();

      if (!user) {
        throw new HttpException({
          success: false,
          message: "Register fail"
        }, HttpStatus.NOT_ACCEPTABLE);
      }

      const access_token = await this.createAccessToken({ userID: user._id, userEmail: user.email });

      const refresh_token = await this.createRefreshToken({ userID: user._id, userEmail: user.email });

      response.cookie('refreshtoken', refresh_token, {
        httpOnly: true,
        path: '/auth/refresh_token',
        maxAge: 30*24*60*60*1000 // 30days
      })

      return {
        success: true,
        user,
        access_token,
        message: "Successfully registered"
      };

    } catch (err) {
      throw new HttpException({
        success: false,
        message: err.message
      }, HttpStatus.BAD_REQUEST);
    }

  }


  async login(loginAuthDto: LoginAuthDto, @Res({ passthrough: true }) response: Response) {
    const { email, password } = loginAuthDto;
    try {
      const user = await this.userModel.findOne({ email: email });

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {

          // const access_token = await jwt.sign({ userID: user._id, userEmail: user.email },
          //     process.env.JWT_SECRET,
          //     { expiresIn: process.env.JWT_TIME });

          // const refresh_token = await jwt.sign({ userID: user._id, userEmail: user.email },
          //     process.env.JWT_SECRET,
          //     { expiresIn: process.env.JWT_REFRESH_TIME });

          const access_token = await this.createAccessToken({ userID: user._id, userEmail: user.email });

          const refresh_token = await this.createRefreshToken({ userID: user._id, userEmail: user.email });

          response.cookie('refreshtoken', refresh_token, {
            httpOnly: true,
            path: '/auth/refresh_token',
            maxAge: 30*24*60*60*1000 // 30days
          })

          return {
            success: true,
            user,
            access_token,
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

  async logout(@Res({ passthrough: true }) response : Response){
    try{

      response.clearCookie('refreshtoken', {path: '/auth/refresh_token'})
      return {
        success: true,
        message: "Logout successfully !"
      }

    }catch (err){
      throw  new HttpException({
        success: false,
        message: err.message
      }, HttpStatus.SERVICE_UNAVAILABLE);
    }
  }


  async refresh_token(@Req() request : Request, @Res({passthrough:true})  response : Response) {
    try {

      const rf_token = request.cookies.refreshtoken //lay cookie
      if(!rf_token)
        throw  new HttpException({
              message: "Please login now."
            }, HttpStatus.BAD_REQUEST);

      const decoded = await jwt.verify(rf_token, process.env.JWT_SECRET);


      if(!decoded)
        throw  new HttpException({
          message: "Please login now."
        }, HttpStatus.BAD_REQUEST);

      else {
        const user = await this.userModel.findById(decoded.userID).select("-password")

        if(!user)
          throw  new HttpException({
            message: "This does not exist."
          }, HttpStatus.BAD_REQUEST);

        else
        {
          const access_token = await this.createAccessToken({ userID: user._id, userEmail: user.email })
          return {
            success: true,
            access_token,
            user,
            message: "Refresh token successfully "
          }
        }
      }
    }catch (err){
      throw  new HttpException({
        success: false,
        message: err.message
      }, HttpStatus.SERVICE_UNAVAILABLE);
    }
  }

  async createAccessToken(payload){
    return await jwt.sign(payload,
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_TIME });
  }

  async createRefreshToken(payload){
    return await jwt.sign(payload,
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_REFRESH_TIME });
  }
}