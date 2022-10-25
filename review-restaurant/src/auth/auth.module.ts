import { Module } from "@nestjs/common";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "../users/models/user.model";

@Module({
  imports: [MongooseModule.forFeature([
    { name: "User", schema: UserSchema }
  ])], //import module
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {
}

