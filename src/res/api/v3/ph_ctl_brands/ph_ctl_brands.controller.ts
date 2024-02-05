import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { PhCtlBrandsService } from './ph_ctl_brands.service';
import { CreatePhCtlBrandDto } from './dto/create-ph_ctl_brand.dto';
import { UpdatePhCtlBrandDto } from './dto/update-ph_ctl_brand.dto';

@Controller('ph_backend/api/v3/ph-ctl-brands')
export class PhCtlBrandsController {
  constructor(private readonly phCtlBrandsService: PhCtlBrandsService) {}

  @Post()
  create(@Body() createPhCtlBrandDto: CreatePhCtlBrandDto) {
    return this.phCtlBrandsService.create(createPhCtlBrandDto);
  }

  @Get()
  findAll() {
    return this.phCtlBrandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phCtlBrandsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePhCtlBrandDto: UpdatePhCtlBrandDto,
  ) {
    return this.phCtlBrandsService.update(+id, updatePhCtlBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phCtlBrandsService.remove(+id);
  }
}
