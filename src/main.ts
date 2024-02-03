import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import swaggerConfig from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api', app, document);

  const PORT = process.env.APP_PORT || 4444;
  await app.listen(PORT, function () {
    console.log(`\thttp://localhost:${PORT}/api - Swagger UI`);
  });
}
bootstrap();
