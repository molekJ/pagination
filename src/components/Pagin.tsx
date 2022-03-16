import { Pagination } from "react-bootstrap";
import { PaginationInterface } from "../types/interfaces";

export const Pagin = ({
  postsPerPage,
  totalPages,
  paginate,
  currentPage,
}: PaginationInterface) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPages / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <Pagination className="justify-content-md-center">
      <Pagination.First
        onClick={() => {
          paginate(1);
        }}
      />
      <Pagination.Prev
        onClick={() => {
          if (currentPage === 1) {
            return;
          }
          paginate(currentPage - 1);
        }}
      />
      {pageNumbers.map((number) => {
        return (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => {
              paginate(number);
            }}
          >
            {number}
          </Pagination.Item>
        );
      })}
      <Pagination.Next
        onClick={() => {
          if (currentPage === pageNumbers.length) {
            return;
          }
          paginate(currentPage + 1);
        }}
      />
      <Pagination.Last
        onClick={() => {
          paginate(pageNumbers.length);
        }}
      />
    </Pagination>
  );
};
