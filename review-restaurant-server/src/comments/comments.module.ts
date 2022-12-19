import { Module } from '@nestjs/common';
import { CommentsService } from './services/comments.service';
import { CommentsController } from './controllers/comments.controller';

import { MongooseModule } from "@nestjs/mongoose";
import {CommentSchema} from "./models/comment.model";
import {PostsSchema} from "../posts/models/posts.model";

@Module({
  imports:[
    MongooseModule.forFeature([{name:"Comments", schema: CommentSchema}]),
    MongooseModule.forFeature([{name:"Posts", schema: PostsSchema}])
  ],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
