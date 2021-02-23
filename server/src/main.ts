import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
// jOkoP5YH0Mls6Kj3
//mongodb+srv://tarasb:<password>@cluster0.d51o4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  const options = new DocumentBuilder()
    .setTitle('commerce')
    .setDescription('The IvorySoft messenger API')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
