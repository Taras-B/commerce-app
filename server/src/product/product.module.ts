import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileService } from 'src/file/file.service';
import { ProductSchema } from 'src/product/schemas/product.schema';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService, FileService],
})
export class ProductModule {}
