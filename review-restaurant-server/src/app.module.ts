import { Module,MiddlewareConsumer } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { InfoRestaurantModule } from "./info-restaurant/info-restaurant.module";
import { PostsModule } from "./posts/posts.module";
import  {AuthMiddleware} from "./middlewares/auth.middleware"
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGO_URI
    ),
    AuthModule,
    PostsModule,
    InfoRestaurantModule,
    CommentsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    // consumer
    //     .apply(AuthMiddleware)
    //     .forRoutes('users');
    //
    // consumer
    //     .apply(AuthMiddleware)
    //     .forRoutes('auth/logout');
  }

}
