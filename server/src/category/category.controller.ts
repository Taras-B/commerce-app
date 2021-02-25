import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @ApiResponse({
    status: 200,
    description: 'Get all  categories',
  })
  @Get()
  getAll() {
    return this.categoryService.findAll();
  }
  @ApiResponse({
    status: 200,
    description: 'Create  category',
  })
  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.categoryService.create(createItemDto);
  }
}
