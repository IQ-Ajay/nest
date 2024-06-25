import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // add validations 
  app.useGlobalPipes(new ValidationPipe());
    // Swagger configuration
    const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('The NestJS API documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // Enable AutoSchemaSync to automatically update the schema
  SwaggerModule.setup('api', app, document);
  await app.listen(4000);
}
bootstrap();
