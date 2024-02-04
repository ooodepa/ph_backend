import PaginationResponseDto from 'src/dto/pagination-response.dto';
import { PhCtlLanguageEntity } from '../entities/ph_ctl_language.entity';

export default class PhCtlLanguagePaginationDto extends PaginationResponseDto {
  data: PhCtlLanguageEntity[];
}
