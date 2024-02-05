import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { PhCtlSeopagesService } from './ph_ctl_seopages.service';
import { CreatePhCtlSeopageDto } from './dto/create-ph_ctl_seopage.dto';
import { UpdatePhCtlSeopageDto } from './dto/update-ph_ctl_seopage.dto';

@Controller('ph_backend/api/v3/ph-ctl-seopages')
export class PhCtlSeopagesController {
  constructor(private readonly phCtlSeopagesService: PhCtlSeopagesService) {}

  @Post()
  create(@Body() createPhCtlSeopageDto: CreatePhCtlSeopageDto) {
    return this.phCtlSeopagesService.create(createPhCtlSeopageDto);
  }

  @Get()
  findAll() {
    return this.phCtlSeopagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phCtlSeopagesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePhCtlSeopageDto: UpdatePhCtlSeopageDto,
  ) {
    return this.phCtlSeopagesService.update(+id, updatePhCtlSeopageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phCtlSeopagesService.remove(+id);
  }
}
