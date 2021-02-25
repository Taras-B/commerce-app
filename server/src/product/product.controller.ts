import { Controller, Get, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from 'src/product/models/product.schema';
import { ProductService } from './product.service';

@ApiTags('products')
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

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
