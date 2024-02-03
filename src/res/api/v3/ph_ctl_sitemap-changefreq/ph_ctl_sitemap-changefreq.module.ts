import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PhCtlSitemapChangefreqService } from './ph_ctl_sitemap-changefreq.service';
import { PhCtlSitemapChangefreqController } from './ph_ctl_sitemap-changefreq.controller';
import { PhCtlSitemapChangefreqEntity } from './entities/ph_ctl_sitemap-changefreq.entity';

@Module({
  controllers: [PhCtlSitemapChangefreqController],
  providers: [PhCtlSitemapChangefreqService],
  imports: [TypeOrmModule.forFeature([PhCtlSitemapChangefreqEntity])],
})
export class PhCtlSitemapChangefreqModule {}
