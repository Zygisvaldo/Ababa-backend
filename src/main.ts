import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpException, HttpStatus } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use('*', (req, res, next) => {
  //   throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  // });
  await app.listen(3000);
}
bootstrap();
