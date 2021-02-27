import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiNotFoundResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/auth/enum/role.enum';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Roles } from 'src/decorators/roles.decorators';
import { Product } from 'src/product/schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@ApiTags('products')
@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @ApiResponse({
    status: 201,
    description: 'Create  product',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Post()
  @UseInterceptors(FileInterceptor('picture'))
  create(@UploadedFile() picture, @Body() product: CreateProductDto) {
    return this.productService.create(product, picture);
  }

  @ApiResponse({
    status: 200,
    description: 'Fetch all shopping products',
  })
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'Fetch product by id',
  })
  @ApiNotFoundResponse({
    description: 'Product not found response',
  })
  @ApiResponse({
    status: 400,
    description: 'Cast to ObjectId failed',
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productService.findById(id);
  }
}
