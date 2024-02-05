import { Module } from '@nestjs/common';

import { PhCtlBrandsService } from './ph_ctl_brands.service';
import { PhCtlBrandsController } from './ph_ctl_brands.controller';

@Module({
  controllers: [PhCtlBrandsController],
  providers: [PhCtlBrandsService],
})
export class PhCtlBrandsModule {}
