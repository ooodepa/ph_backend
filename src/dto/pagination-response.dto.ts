class PaginationDto {
  current_page: number;
  last_page: number;
  limit_items: number;
  skip_items: number;
  total_items: number;
}

export default class PaginationResponseDto {
  paginataion: PaginationDto;
  data: any;
}
