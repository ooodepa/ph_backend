import { PartialType } from '@nestjs/swagger';

import { CreatePhCtlSeopageDto } from './create-ph_ctl_seopage.dto';

export class UpdatePhCtlSeopageDto extends PartialType(CreatePhCtlSeopageDto) {}
