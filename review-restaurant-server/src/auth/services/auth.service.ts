import {HttpException, HttpStatus, Injectable, Req, Res} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserModel, UserSchema } from "../../users/models/user.model";
import { CreateUserDto } from "../../users/dto/create-user.dto";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import {Request, Response} from "express";
import {LoginAuthDto} from "../dto/login-auth.dto";

let arrRefreshToken: string[] = []

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
          message: "RegisterPage fail"
        }, HttpStatus.NOT_ACCEPTABLE);
      }

      const access_token = await this.createAccessToken({ userID: user._id, role: user.role});

      return {
        success: true,
        user,
        access_token,
        message: "Successfully registered"
      };

    } catch (err) {
      console.log(err)
      throw new HttpException({
        success: false,
        message: err.code === 11000 ? "Email already used. Please use another email" : err.message
      }, HttpStatus.BAD_REQUEST);
    }

  }

  async login(loginAuthDto: LoginAuthDto,@Res({passthrough :true}) res: Response) {
    const { email, password } = loginAuthDto;
    try {
      const user = await this.userModel.findOne({ email: email })
          .populate("followers following", "avatar userName address infoRestaurant.images");

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {

          const access_token = await this.createAccessToken({ userID: user._id, role: user.role });
          const refresh_token = await this.createRefreshToken({ userID: user._id, role: user.role });
          arrRefreshToken.push(refresh_token);

          res.cookie("refreshtoken",refresh_token, {
            httpOnly: true,
            secure: false,
            path : "/",
            sameSite : "strict",
          } )

          return {
            success: true,
            user,
            access_token,
            message: " login successfully"
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

  async refresh_token(@Req() req : Request, @Res({passthrough :true}) res: Response) {

    try {

      const rf_token = req.cookies.refreshtoken //lay cookie

      if(!rf_token)
        throw  new HttpException({
              message: "Please login now."
            }, HttpStatus.BAD_REQUEST);

      if(!arrRefreshToken.includes(rf_token)){
        throw  new HttpException({
          message: "Refresh token is not valid"
        }, HttpStatus.BAD_REQUEST);
      }

      const decoded = await jwt.verify(rf_token, process.env.JWT_REFRESH_SECRET);

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
          arrRefreshToken  = arrRefreshToken.filter((token) => token !== rf_token)
          const access_token = await this.createAccessToken({ userID: user._id, role: user.role})
          const refresh_token = await this.createRefreshToken({ userID: user._id, role: user.role})
          arrRefreshToken.push(refresh_token)

          res.cookie("refreshtoken", refresh_token, {
            httpOnly: true,
            secure: false,
            path: "/",
            sameSite: "strict"
          })

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

    async logout(@Req() req : Request, @Res({passthrough :true}) res: Response){
    try{

      res.clearCookie('refreshtoken')
      arrRefreshToken = arrRefreshToken.filter(token => token !== req.cookies.refreshtoken);

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



  async createAccessToken(payload){
    return await jwt.sign(payload,
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_TIME });
  }

  async createRefreshToken(payload){
    return await jwt.sign(payload,
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: process.env.JWT_REFRESH_TIME });
  }

}
