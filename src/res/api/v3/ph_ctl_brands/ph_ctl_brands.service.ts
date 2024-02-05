import { Injectable } from '@nestjs/common';

import { CreatePhCtlBrandDto } from './dto/create-ph_ctl_brand.dto';
import { UpdatePhCtlBrandDto } from './dto/update-ph_ctl_brand.dto';

@Injectable()
export class PhCtlBrandsService {
  create(createPhCtlBrandDto: CreatePhCtlBrandDto) {
    return 'This action adds a new phCtlBrand';
  }

  findAll() {
    return `This action returns all phCtlBrands`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phCtlBrand`;
  }

  update(id: number, updatePhCtlBrandDto: UpdatePhCtlBrandDto) {
    return `This action updates a #${id} phCtlBrand`;
  }

  remove(id: number) {
    return `This action removes a #${id} phCtlBrand`;
  }
}
