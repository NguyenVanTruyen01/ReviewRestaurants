import { Module } from "@nestjs/common";
import { PostsService } from "./services/posts.service";
import { PostsController } from "./controllers/posts.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { PostsSchema } from "./models/posts.model";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Posts", schema: PostsSchema }])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {
}
