import { Injectable } from '@nestjs/common';

import { CreatePhCtlItemCategoryDto } from './dto/create-ph_ctl_item-category.dto';
import { UpdatePhCtlItemCategoryDto } from './dto/update-ph_ctl_item-category.dto';

@Injectable()
export class PhCtlItemCategoriesService {
  create(createPhCtlItemCategoryDto: CreatePhCtlItemCategoryDto) {
    return 'This action adds a new phCtlItemCategory';
  }

  findAll() {
    return `This action returns all phCtlItemCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phCtlItemCategory`;
  }

  update(id: number, updatePhCtlItemCategoryDto: UpdatePhCtlItemCategoryDto) {
    return `This action updates a #${id} phCtlItemCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} phCtlItemCategory`;
  }
}
