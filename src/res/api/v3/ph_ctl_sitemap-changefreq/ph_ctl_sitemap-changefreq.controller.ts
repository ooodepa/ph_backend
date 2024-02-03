import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';

import { PhCtlSitemapChangefreqService } from './ph_ctl_sitemap-changefreq.service';

@ApiTags('api_v3_ph-ctl-sitemap-changefreq')
@Controller('api/v3/ph-ctl-sitemap-changefreq')
export class PhCtlSitemapChangefreqController {
  constructor(
    private readonly phCtlSitemapChangefreqService: PhCtlSitemapChangefreqService,
  ) {}

  @Get()
  findAll() {
    return this.phCtlSitemapChangefreqService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phCtlSitemapChangefreqService.findOne(+id);
  }
}
