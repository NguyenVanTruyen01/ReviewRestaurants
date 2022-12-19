import {Body, HttpException, HttpStatus, Injectable, Param} from "@nestjs/common";
import { CreatePostDto } from "../dto/create-post.dto";
import { UpdatePostDto } from "../dto/update-post.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {PostsModel} from "../models/posts.model";
import {UserModel} from "../../users/models/user.model";
import {CommentModel} from "../../comments/models/comment.model";
const mongoose = require('mongoose');

@Injectable()
export class PostsService {
  
  constructor(
      @InjectModel("Comments") private readonly commentModel: Model<CommentModel>,
      @InjectModel("Posts") private readonly postModel: Model<PostsModel>,
      @InjectModel("User") private readonly userModel: Model<UserModel>
  ) {
  }
  
  
  async create(createPostDto: CreatePostDto) {
    try {

      const  newPost = await new this.postModel(createPostDto);

      const  user = await this.userModel.findByIdAndUpdate(createPostDto.idRestaurant,{
        $push: {rating: createPostDto.ratingRes}
      });

      const posts = await newPost.save().then(t => t.populate("user idRestaurant likes", "avatar userName "))


      if(!posts){
        throw new HttpException({
          message: "Can't create post!"
        }, HttpStatus.NOT_ACCEPTABLE);
      }

      return {
        posts,
        message: "Create post successfully!"
      }

    }catch (err){
      throw new HttpException({
        message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)
    }
  }

  async findAll() {
    try{
      const posts = await this.postModel.find()
          .sort({createdAt :  -1})
          .populate("user idRestaurant likes", "avatar userName ")
          .populate({
            path: "comments",
            populate:{
              path: "user likes",
              select: "avatar userName"
            }
          })
      return{
        posts,
        message: "Get posts successfully!"
      }
    }catch (err){
      throw new HttpException({
        message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)
    }
  }

  async getTimeLinePosts(currentUser){
    try {
        const timeline = await this.postModel.find({user: [...currentUser.following, currentUser._id]})
            .sort('-createdAt')
            .populate("user idRestaurant likes", "avatar userName ")
            .populate({
              path: "comments",
              populate:{
                path: "user",
                select: "avatar userName"
              }
            })

      return {
          success: true,
          posts: timeline,
          message: "Get timeline post"
        }
    }catch (err){
      throw new HttpException({
        message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)
    }
  }

  async findOne(id: string) {
    try {
      const posts  = await this.postModel.findById({_id : id})
          .populate("user idRestaurant likes", "avatar userName ");
      if(posts){
        return {
          posts,
          message: "Get post successfully!"
        }
      }else {
        throw new HttpException({
          message: `Can't find post with id : ${id}`
        }, HttpStatus.NOT_FOUND)
      }

    }catch (err){
      throw new HttpException({
        message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)

    }
  }

  async update(id: string, updatePostDto: UpdatePostDto) {

    if( !mongoose.Types.ObjectId.isValid(id) )
      throw new HttpException({
        message: `Id : "${id}" invalid!`
      }, HttpStatus.BAD_REQUEST)

    const {currentUserId, post} = updatePostDto;

    const posts = await this.postModel.findById({_id: id});

    if(!posts){
      throw new HttpException({
        message: `Can't update post with id : ${id}`
      }, HttpStatus.NOT_FOUND)

    }else {

      if (currentUserId !== posts.user.toString()) {
        throw new HttpException({
          message: "Action forbidden!"
        }, HttpStatus.FORBIDDEN)
      }
      try {
        const newPost = await this.postModel.findByIdAndUpdate(id, post, {new: true})
        return {
          success: true,
          posts: newPost,
          message: "Update post successfully!"
        }

      } catch (err) {
        throw new HttpException({
          message: "Server error. Please try again"
        }, HttpStatus.BAD_REQUEST)
      }
    }
  }

  async remove(id: string, currentUserId) {

    const post = await this.postModel.findOne({_id : id});
    if(!post){
      throw new HttpException({
        message: `Can't remove post with id : ${id}`}, HttpStatus.NOT_FOUND)
    }
    else {

      if(currentUserId !== post.user.toString()){
        throw new HttpException({
          message: `Action forbidden!`}, HttpStatus.FORBIDDEN)
      }
      else {

        try{
          await post.remove();

          const comments = await this.commentModel.deleteMany({
            postId : id
          })

          return {
            success: true,
            message: "Remove post successfully!"
          }

        }catch (err){
          throw new HttpException({
            message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)
        }

      }

    }
  }

  async likePost(id: string, currentUserId : string){
    const post = await this.postModel.findById(id);
    if(!post){
      throw new HttpException({
        message: `Can't find post by id ${id}`}, HttpStatus.BAD_REQUEST)

    }


    if(post.likes.includes(currentUserId)){
      throw new HttpException({
        message: `You liked this post!`}, HttpStatus.BAD_REQUEST)
    }

    try {
      const posts = await this.postModel.findByIdAndUpdate(id,{
          $push :{likes: currentUserId}
      }, {new:true})
          .sort('-createAt')
          .populate("user idRestaurant likes", "avatar userName ")

      return {
        success: true,
        posts,
        message: "Liked post!"
      }
    }catch (err){
      throw new HttpException({
        message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)
    }
  }

  async unLikePost(id: string, currentUserId){

    const post = await this.postModel.findById(id);
    if(!post){
      throw new HttpException({
        message: `Can't find post by id ${id}`}, HttpStatus.BAD_REQUEST)

    }

    if(!post.likes.includes(currentUserId)){
      throw new HttpException({
        message: `You have not liked this post. So you can't unlike it `}, HttpStatus.BAD_REQUEST)
    }

    try {
      const posts = await this.postModel.findByIdAndUpdate(id,{
        $pull :{likes: currentUserId}
      }, {new:true})
          .sort('-createAt')
          .populate("user idRestaurant likes", "avatar userName ")

      return {
        success: true,
        posts,
        message: "Unliked post!"
      }
    }catch (err){
      throw new HttpException({
        message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)
    }
  }

  async deleteAllPost(){
    await this.postModel.deleteMany();
    return{
      success: true,
      message: "Delete all posts successfully!"
    }
  }
}
