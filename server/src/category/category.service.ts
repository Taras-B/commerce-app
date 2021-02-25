import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async findAll(): Promise<Category[]> {
    const categories = await this.categoryModel.find();
    return categories;
  }
  async create(name: string): Promise<Category> {
    const newCategory = await this.categoryModel.create(name);
    const category = await newCategory.save();
    return category;
  }
}
