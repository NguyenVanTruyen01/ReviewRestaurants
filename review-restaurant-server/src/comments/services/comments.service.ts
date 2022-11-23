import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CommentModel} from "../models/comment.model"
import {PostsModel} from "../../posts/models/posts.model";

@Injectable()
export class CommentsService {
  constructor(
      @InjectModel("Comments") private readonly commentModel: Model<CommentModel>,
      @InjectModel("Posts") private readonly postModel: Model<PostsModel>
  ) {

  }


  async create(createCommentDto: CreateCommentDto) {
   try {
     const {postId} = createCommentDto;

      const newComment = await new this.commentModel(createCommentDto)

      const post = await this.postModel.findOneAndUpdate({_id: postId}, {
        $push: {comments: newComment._id}
      }, {new:true});

     console.log(post)

      const comment = await newComment.save();
     console.log(comment)

      return {
        success: true,
        comment: newComment,
        message: "Create comment successfully!"

      }

   }catch (err){
     throw new HttpException({
       message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)
   }
  }

  async findAll() {
    try {
      const comments = await this.commentModel.find();

      return {
        success: true,
        comments,
        message: "Get all successfully!"
      }

    }catch (err){
      throw new HttpException({
        message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)
    }
  }

  findOne(id: string) {
   try {

   }catch (err){
       throw new HttpException({
           message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)

   }
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }

  async deleteAllComments(){
      try {
          await this.commentModel.deleteMany();
          return{
              success: true,
              message: "Delete all comment successfully!"
          }
      }catch (err){
          throw new HttpException({
              message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)
      }
  }
}
