import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import { CreatePostDto } from "../dto/create-post.dto";
import { UpdatePostDto } from "../dto/update-post.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {PostsModel} from "../models/posts.model";

@Injectable()
export class PostsService {
  
  constructor(
      @InjectModel("Posts") private readonly postModel: Model<PostsModel>
  ) {
  }
  
  
  async create(createPostDto: CreatePostDto) {
    try {

      const  newPost = await new this.postModel(createPostDto);
      const posts = await newPost.save();

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
      const posts = await this.postModel.find();
      return{
        posts,
        message: "Get posts successfully!"
      }
    }catch (err){
      throw new HttpException({
        message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)
    }
  }

  async findOne(id: string) {
    try {
      const posts  = await this.postModel.findById({_id : id});
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
    return `This action updates a #${id} post`;
  }

  async remove(id: string) {
    try{

      const post = await this.postModel.findByIdAndDelete({_id: id})
      return "Remove post"

    }catch (err){
      throw new HttpException({
        message: "Server error. Please try again"}, HttpStatus.BAD_REQUEST)

    }
  }
}
