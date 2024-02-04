import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PhCtlLanguagesService } from './ph_ctl_languages.service';
import { PhCtlLanguageEntity } from './entities/ph_ctl_language.entity';
import { PhCtlLanguagesController } from './ph_ctl_languages.controller';

@Module({
  controllers: [PhCtlLanguagesController],
  providers: [PhCtlLanguagesService],
  imports: [TypeOrmModule.forFeature([PhCtlLanguageEntity])],
})
export class PhCtlLanguagesModule {}
