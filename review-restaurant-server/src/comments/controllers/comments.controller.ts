import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentsService } from '../services/comments.service';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() newData) {
    return this.commentsService.update(id, newData);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body("currentUserId") currentUserId: string) {
    return this.commentsService.remove(id,currentUserId);
  }

  @Delete()
  deleteAllComments() {
    return this.commentsService.deleteAllComments();
  }

  @Patch(":id/like")
  likePost(@Param("id") id: string, @Body("currentUserId") currentUserId: string){
    return this.commentsService.likeComment(id,currentUserId)
  }

  @Patch(":id/unlike")
  unLikePost(@Param("id") id: string,  @Body("currentUserId") currentUserId: string){
    return this.commentsService.unLikeComment(id,currentUserId)
  }


}
