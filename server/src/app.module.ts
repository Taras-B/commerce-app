import { Module } from '@nestjs/common';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL, { useCreateIndex: true }),
    AuthModule,
    ProductModule,
    CategoryModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
