import { Module } from '@nestjs/common';
import { CommentsService } from './services/comments.service';
import { CommentsController } from './controllers/comments.controller';

import { MongooseModule } from "@nestjs/mongoose";
import {CommentSchema} from "./models/comment.model";

@Module({
  imports:[
    MongooseModule.forFeature([{name:"Comment", schema: CommentSchema}])
  ],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
