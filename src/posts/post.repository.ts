import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { GetPostsDto } from './dto/get-posts.dto';
import { Post } from './post.entity';

@Injectable()
export class PostRepository extends Repository<Post> {
  constructor(private dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }

  getPosts(getPostsDTO: GetPostsDto): Promise<Post[]> {
    const { status, title } = getPostsDTO;

    const query = this.createQueryBuilder('post');

    if (status) {
      query.andWhere('post.status = :status', { status });
    }

    if (title) {
      query.andWhere('post.title = :title', { title });
    }

    return query.getMany();
  }
}
