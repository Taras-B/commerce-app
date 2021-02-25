import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/auth/enum/role.enum';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Roles } from 'src/decorators/roles.decorators';
import { CategoryService } from './category.service';
import { CreateItemDto } from './dto/create-item.dto';

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
    status: 201,
    description: 'Create  category',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request: name are required',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.categoryService.create(createItemDto.name);
  }
}
