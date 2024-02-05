import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { PhCtlItemsService } from './ph_ctl_items.service';
import { CreatePhCtlItemDto } from './dto/create-ph_ctl_item.dto';
import { UpdatePhCtlItemDto } from './dto/update-ph_ctl_item.dto';

@Controller('ph-ctl-items')
export class PhCtlItemsController {
  constructor(private readonly phCtlItemsService: PhCtlItemsService) {}

  @Post()
  create(@Body() createPhCtlItemDto: CreatePhCtlItemDto) {
    return this.phCtlItemsService.create(createPhCtlItemDto);
  }

  @Get()
  findAll() {
    return this.phCtlItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phCtlItemsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePhCtlItemDto: UpdatePhCtlItemDto,
  ) {
    return this.phCtlItemsService.update(+id, updatePhCtlItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phCtlItemsService.remove(+id);
  }
}
