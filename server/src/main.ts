import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// jOkoP5YH0Mls6Kj3
//mongodb+srv://tarasb:<password>@cluster0.d51o4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
