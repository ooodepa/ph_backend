import { PartialType } from '@nestjs/swagger';

import { CreatePhCtlBrandDto } from './create-ph_ctl_brand.dto';

export class UpdatePhCtlBrandDto extends PartialType(CreatePhCtlBrandDto) {}
