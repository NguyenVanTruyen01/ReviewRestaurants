import {Body, HttpException, HttpStatus, Injectable} from '@nestjs/common';
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

  async findOne(id: string) {
   try {

   }catch (err){
       throw new HttpException({
           message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)

   }
  }

  async update(id: string, newData) {
      try {

          const {content,currentUserId} = newData;

          const comment = await this.commentModel.findById(id);

          if(comment.user.toString() !== currentUserId){
              throw new HttpException({
                  message: "Action forbidden!"}, HttpStatus.FORBIDDEN)
          }

          const newComment = await this.commentModel.findByIdAndUpdate(id,{content},{new :true})

          return {
              success: true,
              comment: newComment,
              message: "Update comment successfully!"
          }

      }catch (err){
          throw new HttpException({
              message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)

      }

  }

  async remove(id: string , currentUserId: string) {
    try{
        const comments = await this.commentModel.findOneAndDelete({
            _id :id,
            $or:[
                {user: currentUserId},
                {postUserId: currentUserId}
            ]
        })

        await this.postModel.findOneAndUpdate({_id : comments.postId},{
            $pull: {comments: id}
        })

        return {
            success: true,
            comments,
            message: "Delete comment successfully!"
        }

    }catch (err){
        throw new HttpException(
            {message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)
    }
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

  async likeComment(id: string, currentUserId : string){
        const comment = await this.commentModel.findById(id);

        if(!comment){
            throw new HttpException({
                message: `Can't find post by id ${id}`}, HttpStatus.BAD_REQUEST)

        }

        if(comment.likes.includes(currentUserId)){
            throw new HttpException({
                message: `You liked this comment!`}, HttpStatus.BAD_REQUEST)
        }

        try {
            const comments = await this.commentModel.findByIdAndUpdate(id,{
                $push :{likes: currentUserId}
            }, {new:true})
                .sort('-createdAt')
                .populate("user likes", "avatar userName ")

            return {
                success: true,
                comments,
                message: "Liked comment!!"
            }
        }catch (err){
            throw new HttpException({
                message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)
        }
    }

    async unLikeComment(id: string, currentUserId){

        const comment = await this.commentModel.findById(id);
        if(!comment){
            throw new HttpException({
                message: `Can't find post by id ${id}`}, HttpStatus.BAD_REQUEST)

        }

        if(!comment.likes.includes(currentUserId)){
            throw new HttpException({
                message: `You have not liked this comment. So you can't unlike it `}, HttpStatus.BAD_REQUEST)
        }

        try {
            const comments = await this.commentModel.findByIdAndUpdate(id,{
                $pull :{likes: currentUserId}
            }, {new:true})
                .sort('-createAt')
                .populate("user likes", "avatar userName ")

            return {
                success: true,
                comments,
                message: "Unliked post!"
            }
        }catch (err){
            throw new HttpException({
                message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)
        }
    }
}
