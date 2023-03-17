import { Body, Injectable, Param, Query } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { GetPostsDto } from './dto/get-posts.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './post.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postRepository: PostRepository) {}

  getAllPosts(@Query() getPostsDto: GetPostsDto) {
    return this.postRepository.find();
  }

  getPostById(@Param('id') id: string) {
    return `This action returns a post by id ${id}`;
  }

  createPost(@Body() createPostDto: CreatePostDto) {
    return 'This action creates a post';
  }

  updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return 'This action updates a post';
  }

  deletePost(@Param('id') id: string) {
    return 'This action deletes a post';
  }
}
