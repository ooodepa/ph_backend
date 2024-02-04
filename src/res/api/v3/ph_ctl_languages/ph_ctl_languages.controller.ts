import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';

import { PhCtlLanguagesService } from './ph_ctl_languages.service';

@ApiTags('api_v3_ph-ctl-languages')
@Controller('api/v3/ph-ctl-languages')
export class PhCtlLanguagesController {
  constructor(private readonly phCtlLanguagesService: PhCtlLanguagesService) {}

  @Get()
  findAll() {
    return this.phCtlLanguagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phCtlLanguagesService.findOne(+id);
  }
}
