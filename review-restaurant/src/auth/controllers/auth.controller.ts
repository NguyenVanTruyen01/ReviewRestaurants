import { Body, Controller, Post, Render } from "@nestjs/common";
import { AuthService } from "../services/auth.service";
import { CreateUserDto } from "../../users/dto/create-user.dto";
import { LoginAuthDto } from "../dto/login-auth.dto";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService) {
  }

  @Post("signup")
  // @Render("auth/login")
  async signup(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.signup(createUserDto);
    return user;
  }

  @Post("login")
  async login(@Body() loginAuthDto: LoginAuthDto) {
    return await this.authService.login(loginAuthDto);
  }

}