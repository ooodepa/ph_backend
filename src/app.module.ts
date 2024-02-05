import * as path from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PhCtlLanguagesModule } from './res/api/v3/ph_ctl_languages/ph_ctl_languages.module';
import { PhCtlSitemapChangefreqModule } from './res/api/v3/ph_ctl_sitemap-changefreq/ph_ctl_sitemap-changefreq.module';
import { PhCtlItemCharacteristicsModule } from './res/api/v3/ph_ctl_item-characteristics/ph_ctl_item-characteristics.module';
import { PhCtlSeopagesModule } from './res/api/v3/ph_ctl_seopages/ph_ctl_seopages.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [path.join('dist', '**', '*.entity.js')],
      logging: true,
      logger: 'file',
      synchronize: false,
    }),
    PhCtlSitemapChangefreqModule,
    PhCtlLanguagesModule,
    PhCtlItemCharacteristicsModule,
    PhCtlSeopagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
