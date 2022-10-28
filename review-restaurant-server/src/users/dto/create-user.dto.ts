import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsNotEmpty} from "@nestjs/class-validator";

export class CreateUserDto {
  @ApiProperty({
      type: String,
      description: "Email account user",
      example: "nvt@gmail.com"
    }
  )
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
      type: String,
      description: "Password account user",
      example: "nvt@gmail.com"
    }
  )
  @IsNotEmpty()
  readonly password: string;
}
