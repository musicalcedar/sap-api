export interface Pagination {
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: Pagination;
}
