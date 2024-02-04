import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { PhCtlLanguageEntity } from './entities/ph_ctl_language.entity';
import PhCtlLanguagePaginationDto from './dto/ph_ctl_language-pagination.dto';

@Injectable()
export class PhCtlLanguagesService {
  constructor(
    @InjectRepository(PhCtlLanguageEntity)
    private readonly languageRep: Repository<PhCtlLanguageEntity>,
  ) {}

  async findAll() {
    const PAGE = 3;
    const LIMIT = 1;
    const SKIP = LIMIT * (PAGE - 1);

    const [ITEMS, TOTAL] = await this.languageRep.findAndCount({
      skip: SKIP,
      take: LIMIT,
    });

    const LAST_PAGE = Math.ceil(TOTAL / LIMIT);

    const response: PhCtlLanguagePaginationDto = {
      paginataion: {
        current_page: PAGE,
        last_page: LAST_PAGE,
        limit_items: LIMIT,
        skip_items: SKIP,
        total_items: TOTAL,
      },
      data: ITEMS,
    };

    return response;
  }

  async findOne(id: number) {
    return await this.languageRep.findOneOrFail({ where: { ph_code: id } });
  }
}
