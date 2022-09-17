import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Employees')
    .setDescription("Employees API's")
    .setVersion('1.0')
    .addTag('employee')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // validate data recieved by the endpoints
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  // allow cross origin requests
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
