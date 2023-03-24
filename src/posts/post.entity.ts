import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../categories/category.entity';
import { PostStatus } from './post-status.enum';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  status: PostStatus;

  @ManyToOne(() => Category, (category) => category.posts)
  category: Category;
}
