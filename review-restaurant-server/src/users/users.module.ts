import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./models/user.model";

@Module({
  imports: [
    MongooseModule.forFeature([{name:"User",schema: UserSchema}])
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
