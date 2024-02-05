import { PartialType } from '@nestjs/swagger';
import { CreatePhCtlItemCharacteristicDto } from './create-ph_ctl_item-characteristic.dto';

export class UpdatePhCtlItemCharacteristicDto extends PartialType(
  CreatePhCtlItemCharacteristicDto,
) {}
