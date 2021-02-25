import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FileService } from 'src/file/file.service';
import { Product, ProductDocument } from 'src/product/schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private productModel: Model<ProductDocument>,
    private fileService: FileService,
  ) {}

  async create(product: CreateProductDto, file) {
    const picturePath = this.fileService.createFile(file);
    const newProduct = await this.productModel.create({
      ...product,
      picture: picturePath,
    });
    const saveProduct = await newProduct.save();
    return saveProduct;
  }

  async findAll(): Promise<Product[]> {
    const product = await this.productModel.find();
    return product;
  }
  async findById(id: string): Promise<Product> {
    const product = await this.productModel
      .findById(id)
      .populate({ path: 'category', select: 'name' });
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NO_CONTENT);
    }
    return product;
  }
}
