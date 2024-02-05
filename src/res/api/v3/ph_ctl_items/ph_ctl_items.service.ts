import { Injectable } from '@nestjs/common';

import { CreatePhCtlItemDto } from './dto/create-ph_ctl_item.dto';
import { UpdatePhCtlItemDto } from './dto/update-ph_ctl_item.dto';

@Injectable()
export class PhCtlItemsService {
  create(createPhCtlItemDto: CreatePhCtlItemDto) {
    return 'This action adds a new phCtlItem';
  }

  findAll() {
    return `This action returns all phCtlItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phCtlItem`;
  }

  update(id: number, updatePhCtlItemDto: UpdatePhCtlItemDto) {
    return `This action updates a #${id} phCtlItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} phCtlItem`;
  }
}
