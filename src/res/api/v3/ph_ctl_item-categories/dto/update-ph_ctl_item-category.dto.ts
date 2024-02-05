import { PartialType } from '@nestjs/swagger';

import { CreatePhCtlItemCategoryDto } from './create-ph_ctl_item-category.dto';

export class UpdatePhCtlItemCategoryDto extends PartialType(
  CreatePhCtlItemCategoryDto,
) {}
