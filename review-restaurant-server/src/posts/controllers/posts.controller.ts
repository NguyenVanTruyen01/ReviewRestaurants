import {Controller, Get, Post, Body, Patch, Param, Delete, Render} from "@nestjs/common";
import { PostsService } from "../services/posts.service";
import { CreatePostDto } from "../dto/create-post.dto";
import { UpdatePostDto } from "../dto/update-post.dto";
import mongoose from "mongoose";

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get("timeline")
  getTimeLinePosts(@Body() currentUser){
    return this.postsService.getTimeLinePosts(currentUser);
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }


  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.postsService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Body("currentUserId") currentUserId: string) {
    return this.postsService.remove(id,currentUserId);
  }

  @Patch(":id/like")
  likePost(@Param("id") id: string, @Body("currentUserId") currentUserId: string){
    return this.postsService.likePost(id,currentUserId)
  }

  @Patch(":id/unlike")
  unLikePost(@Param("id") id: string,  @Body("currentUserId") currentUserId: string){
    return this.postsService.unLikePost(id,currentUserId)
  }
}
