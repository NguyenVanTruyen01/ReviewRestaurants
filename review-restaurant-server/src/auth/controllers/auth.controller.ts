import {Body, Controller, Post, Res, Get, Req} from "@nestjs/common";
import { AuthService } from "../services/auth.service";
import { CreateUserDto } from "../../users/dto/create-user.dto";
import { LoginAuthDto } from "../dto/login-auth.dto";
import {Response,Request} from "express"

@Controller("auth")
export class AuthController {
  constructor(
      private readonly authService: AuthService) {
  }

  @Post("signup")
  async signup(@Body() createUserDto: CreateUserDto) {
    return await this.authService.signup(createUserDto);
  }

  @Post("login")
  async login(@Body() loginAuthDto: LoginAuthDto ,@Res({passthrough :true}) res: Response) {
    return await this.authService.login(loginAuthDto,res);
  }

  @Post("refresh_token")
  async  refresh_token(@Req() req : Request, @Res({passthrough :true}) res: Response){
      return await  this.authService.refresh_token(req,res)
  }

  @Post("logout")
  async logout(@Req() req : Request, @Res({passthrough :true}) res: Response) {
    return await this.authService.logout(req,res);
  }

}
