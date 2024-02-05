import { Module } from '@nestjs/common';

import { PhCtlItemCategoriesService } from './ph_ctl_item-categories.service';
import { PhCtlItemCategoriesController } from './ph_ctl_item-categories.controller';

@Module({
  controllers: [PhCtlItemCategoriesController],
  providers: [PhCtlItemCategoriesService],
})
export class PhCtlItemCategoriesModule {}
