import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
      type: String,
      description: "Email account user",
      example: "nvt@gmail.com"
    }
  )
  readonly email: string;

  @ApiProperty({
      type: String,
      description: "Email account user",
      example: "nvt@gmail.com"
    }
  )
  readonly username: string;

  @ApiProperty({
      type: String,
      description: "Email account user",
      example: "nvt@gmail.com"
    }
  )
  readonly password: string;
}
