import { Injectable } from '@nestjs/common';

import { CreatePhCtlItemCharacteristicDto } from './dto/create-ph_ctl_item-characteristic.dto';
import { UpdatePhCtlItemCharacteristicDto } from './dto/update-ph_ctl_item-characteristic.dto';

@Injectable()
export class PhCtlItemCharacteristicsService {
  create(createPhCtlItemCharacteristicDto: CreatePhCtlItemCharacteristicDto) {
    return 'This action adds a new phCtlItemCharacteristic';
  }

  findAll() {
    return `This action returns all phCtlItemCharacteristics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phCtlItemCharacteristic`;
  }

  update(
    id: number,
    updatePhCtlItemCharacteristicDto: UpdatePhCtlItemCharacteristicDto,
  ) {
    return `This action updates a #${id} phCtlItemCharacteristic`;
  }

  remove(id: number) {
    return `This action removes a #${id} phCtlItemCharacteristic`;
  }
}
