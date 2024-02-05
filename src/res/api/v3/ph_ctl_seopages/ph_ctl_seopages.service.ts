import { Injectable } from '@nestjs/common';

import { CreatePhCtlSeopageDto } from './dto/create-ph_ctl_seopage.dto';
import { UpdatePhCtlSeopageDto } from './dto/update-ph_ctl_seopage.dto';

@Injectable()
export class PhCtlSeopagesService {
  create(createPhCtlSeopageDto: CreatePhCtlSeopageDto) {
    return 'This action adds a new phCtlSeopage';
  }

  findAll() {
    return `This action returns all phCtlSeopages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phCtlSeopage`;
  }

  update(id: number, updatePhCtlSeopageDto: UpdatePhCtlSeopageDto) {
    return `This action updates a #${id} phCtlSeopage`;
  }

  remove(id: number) {
    return `This action removes a #${id} phCtlSeopage`;
  }
}
