import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductInfoDocument = ProductInfo & Document;

@Schema()
export class ProductInfo {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const ProductInfoSchema = SchemaFactory.createForClass(ProductInfo);
