import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { PhCtlItemCharacteristicsService } from './ph_ctl_item-characteristics.service';
import { CreatePhCtlItemCharacteristicDto } from './dto/create-ph_ctl_item-characteristic.dto';
import { UpdatePhCtlItemCharacteristicDto } from './dto/update-ph_ctl_item-characteristic.dto';

@Controller('ph-ctl-item-characteristics')
export class PhCtlItemCharacteristicsController {
  constructor(
    private readonly phCtlItemCharacteristicsService: PhCtlItemCharacteristicsService,
  ) {}

  @Post()
  create(
    @Body() createPhCtlItemCharacteristicDto: CreatePhCtlItemCharacteristicDto,
  ) {
    return this.phCtlItemCharacteristicsService.create(
      createPhCtlItemCharacteristicDto,
    );
  }

  @Get()
  findAll() {
    return this.phCtlItemCharacteristicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phCtlItemCharacteristicsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePhCtlItemCharacteristicDto: UpdatePhCtlItemCharacteristicDto,
  ) {
    return this.phCtlItemCharacteristicsService.update(
      +id,
      updatePhCtlItemCharacteristicDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phCtlItemCharacteristicsService.remove(+id);
  }
}
