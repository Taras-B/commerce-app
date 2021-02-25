import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiNotFoundResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from 'src/product/schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@ApiTags('products')
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'picture', maxCount: 1 }]))
  async create(@UploadedFile() file, @Body() product: CreateProductDto) {
    return this.productService.create(product, file.picture[0]);
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
