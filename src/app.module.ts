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
import { PhCtlBrandsModule } from './res/api/v3/ph_ctl_brands/ph_ctl_brands.module';
import { PhCtlItemCategoriesModule } from './res/api/v3/ph_ctl_item-categories/ph_ctl_item-categories.module';
import { PhCtlItemsModule } from './res/api/v3/ph_ctl_items/ph_ctl_items.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DB_NAME || './database.sqlite',
      entities: [path.join('dist', '**', '*.entity.js')],
      logging: true,
      // logger: 'file',
      synchronize: false,
    }),
    PhCtlSitemapChangefreqModule,
    PhCtlLanguagesModule,
    PhCtlItemCharacteristicsModule,
    PhCtlSeopagesModule,
    PhCtlBrandsModule,
    PhCtlItemCategoriesModule,
    PhCtlItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
