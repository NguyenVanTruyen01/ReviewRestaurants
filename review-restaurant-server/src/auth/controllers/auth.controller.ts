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
  async signup(@Body() createUserDto: CreateUserDto, @Res({ passthrough: true }) response: Response) {
    return await this.authService.signup(createUserDto,response);
  }

  @Post("login")
  async login(@Body() loginAuthDto: LoginAuthDto, @Res({ passthrough: true }) response: Response) {
    return await this.authService.login(loginAuthDto, response);
  }

  @Post("logout")
  async logout(@Res({ passthrough: true }) response: Response) {
    return await this.authService.logout(response);
  }

  @Post("refresh_token")
  async refresh_token(@Req() request : Request, @Res({passthrough:true})  response : Response) {
    return await this.authService.refresh_token(request,response);
  }

}