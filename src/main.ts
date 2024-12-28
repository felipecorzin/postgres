import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.enableCors();
  app.setGlobalPrefix('api/v1/');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Directorio Público
  app.useStaticAssets(join(__dirname, '..', 'public'));

  await app.listen(parseInt(process.env.PORT) || 3000, () => {
    console.log(`Server is running on port 3000`);
  });
}
bootstrap();
