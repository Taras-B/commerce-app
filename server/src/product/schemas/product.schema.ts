import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Category } from '../../category/schemas/category.schema';
import { ProductInfo } from './productInfo.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  description: string;

  @Prop({ type: Date, default: Date.now })
  create: Date;

  @Prop()
  picture: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category: Category;

  @Prop({
    default: [],
    validate: {
      validator: function () {
        return this.productInfo.length <= 10;
      },
      message: 'Array productInfo exceeds max size 10.',
    },
  })
  productInfo: ProductInfo[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
