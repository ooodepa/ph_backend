import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { PhCtlItemCategoriesService } from './ph_ctl_item-categories.service';
import { CreatePhCtlItemCategoryDto } from './dto/create-ph_ctl_item-category.dto';
import { UpdatePhCtlItemCategoryDto } from './dto/update-ph_ctl_item-category.dto';

@Controller('ph-ctl-item-categories')
export class PhCtlItemCategoriesController {
  constructor(
    private readonly phCtlItemCategoriesService: PhCtlItemCategoriesService,
  ) {}

  @Post()
  create(@Body() createPhCtlItemCategoryDto: CreatePhCtlItemCategoryDto) {
    return this.phCtlItemCategoriesService.create(createPhCtlItemCategoryDto);
  }

  @Get()
  findAll() {
    return this.phCtlItemCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phCtlItemCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePhCtlItemCategoryDto: UpdatePhCtlItemCategoryDto,
  ) {
    return this.phCtlItemCategoriesService.update(
      +id,
      updatePhCtlItemCategoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phCtlItemCategoriesService.remove(+id);
  }
}
