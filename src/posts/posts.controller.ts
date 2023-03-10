import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  getAllPosts(@Query() query: any) {
    return 'This action returns all posts';
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return `This action returns a post by id ${id}`;
  }

  @Post()
  createPost(@Body() post: any) {
    return 'This action creates a post';
  }

  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() post: any) {
    return 'This action updates a post';
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return 'This action deletes a post';
  }
}
