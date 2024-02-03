import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { PhCtlSitemapChangefreqEntity } from './entities/ph_ctl_sitemap-changefreq.entity';

@Injectable()
export class PhCtlSitemapChangefreqService {
  constructor(
    @InjectRepository(PhCtlSitemapChangefreqEntity)
    private readonly sitemapChangefreqRep: Repository<PhCtlSitemapChangefreqEntity>,
  ) {}

  async findAll() {
    return await this.sitemapChangefreqRep.find();
  }

  async findOne(id: number) {
    return await this.sitemapChangefreqRep.findOneOrFail({
      where: { ph_code: id },
    });
  }
}
