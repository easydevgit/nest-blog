import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PostStatus } from '../post-status.enum';

export class GetPostsDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsEnum(PostStatus)
  @IsOptional()
  status?: string;
}
