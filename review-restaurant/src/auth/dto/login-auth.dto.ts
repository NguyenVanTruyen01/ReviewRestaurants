import {IsEmail, IsNotEmpty} from '@nestjs/class-validator';
export class LoginAuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}