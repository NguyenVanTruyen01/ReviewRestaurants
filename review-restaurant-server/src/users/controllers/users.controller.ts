import { Controller, Get,Put, Body, Patch, Param, Delete } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { UpdateUserDto } from "../dto/update-user.dto";;
import {FollowUserDto} from "../dto/follow-user.dto";


@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Put("follow/:id")
  follow(@Param("id") id: string, @Body() followUserDto : FollowUserDto){
  return this.usersService.follow(id, followUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(id);
  }
}


