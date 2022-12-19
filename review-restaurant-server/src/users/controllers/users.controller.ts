import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UpdateUserDto } from '../dto/update-user.dto';
import { FollowUserDto } from '../dto/follow-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('search')
  searchByUserName(@Query('key') key) {
    return this.usersService.searchByUserName(key);
  }
  @Post('searchManyFields')
  searchManyFields(@Body() search) {
    return this.usersService.searchManyFields(search);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Patch(':id/follow')
  follow(@Param('id') id: string, @Body() followUserDto: FollowUserDto) {
    return this.usersService.follow(id, followUserDto);
  }

  @Patch(':id/unfollow')
  unfollow(@Param('id') id: string, @Body() followUserDto: FollowUserDto) {
    return this.usersService.unFollow(id, followUserDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Delete()
  deleteAllUser() {
    return this.usersService.deleteAllUser();
  }
}
