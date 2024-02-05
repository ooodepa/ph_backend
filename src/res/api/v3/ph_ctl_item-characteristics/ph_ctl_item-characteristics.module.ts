import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PhCtlItemCharacteristicsService } from './ph_ctl_item-characteristics.service';
import { PhCtlItemCharacteristicEntity } from './entities/ph_ctl_item-characteristic.entity';
import { PhCtlItemCharacteristicsController } from './ph_ctl_item-characteristics.controller';
import { PhLstItemCharactTranslateEntity } from './entities/ph_lst_item-charactTranslate.entity';

@Module({
  controllers: [PhCtlItemCharacteristicsController],
  providers: [PhCtlItemCharacteristicsService],
  imports: [
    TypeOrmModule.forFeature([
      PhCtlItemCharacteristicEntity,
      PhLstItemCharactTranslateEntity,
    ]),
  ],
})
export class PhCtlItemCharacteristicsModule {}
