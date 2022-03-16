export interface PostInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PaginationInterface {
  postsPerPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}
