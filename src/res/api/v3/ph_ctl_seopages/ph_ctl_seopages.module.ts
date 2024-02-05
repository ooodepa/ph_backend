import { Module } from '@nestjs/common';

import { PhCtlSeopagesService } from './ph_ctl_seopages.service';
import { PhCtlSeopagesController } from './ph_ctl_seopages.controller';

@Module({
  controllers: [PhCtlSeopagesController],
  providers: [PhCtlSeopagesService],
})
export class PhCtlSeopagesModule {}
