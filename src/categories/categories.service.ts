import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = new Category();
    category.title = createCategoryDto.title;
    return this.categoryRepository.save(category);
  }

  async getCategoryById(@Param('id') id: string): Promise<Category[]> {
    const category = await this.categoryRepository.find({
      where: {
        id,
      },
      relations: ['posts'],
    });

    if (!category.length) {
      throw new NotFoundException('Category not found');
    }

    return category;
  }
}
