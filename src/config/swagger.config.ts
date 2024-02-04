import { DocumentBuilder } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('REST API документация')
  .setDescription('')
  .setVersion('1.0.0')
  .addTag(
    'api_v3_ph-ctl-sitemap-changefreq',
    'Каталог частоты обновления страницы (Sitemap)',
  )
  .addTag('api_v3_ph-ctl-languages', 'Каталог языков')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'access token - токен доступа',
      in: 'header',
    },
    'access-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
  )
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'refresh token - токен обновления',
      in: 'header',
    },
    'refresh-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
  )
  .build();

export default swaggerConfig;
