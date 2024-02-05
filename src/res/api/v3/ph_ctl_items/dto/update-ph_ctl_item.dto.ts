import { PartialType } from '@nestjs/swagger';

import { CreatePhCtlItemDto } from './create-ph_ctl_item.dto';

export class UpdatePhCtlItemDto extends PartialType(CreatePhCtlItemDto) {}
