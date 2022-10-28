import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { InfoRestaurantModule } from "./info-restaurant/info-restaurant.module";
import { PostsModule } from "./posts/posts.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGO_URI
    ),
    AuthModule,
    PostsModule,
    InfoRestaurantModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
