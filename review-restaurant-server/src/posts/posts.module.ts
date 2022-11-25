import { Module } from "@nestjs/common";
import { PostsService } from "./services/posts.service";
import { PostsController } from "./controllers/posts.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { PostsSchema } from "./models/posts.model";
import {UserSchema} from "../users/models/user.model";
import {CommentSchema} from "../comments/models/comment.model";

@Module({
  imports: [
      MongooseModule.forFeature([{ name: "Posts", schema: PostsSchema }]),
      MongooseModule.forFeature([{name:"User", schema: UserSchema}]),
      MongooseModule.forFeature([{name:"Comments", schema: CommentSchema}])
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {
}
