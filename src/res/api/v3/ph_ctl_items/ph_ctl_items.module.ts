import { Module } from '@nestjs/common';

import { PhCtlItemsService } from './ph_ctl_items.service';
import { PhCtlItemsController } from './ph_ctl_items.controller';

@Module({
  controllers: [PhCtlItemsController],
  providers: [PhCtlItemsService],
})
export class PhCtlItemsModule {}
