import { IsEnum, IsString } from 'class-validator';
import { PostStatus } from '../post-status.enum';

export class CreatePostDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly body: string;

  @IsEnum(PostStatus)
  readonly status: PostStatus;
}
