import { Body, Controller, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoriesService.createCategory(createCategoryDto);
  }
}
