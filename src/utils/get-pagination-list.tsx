import { ReactElement } from "react";

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const addPaginationItem = (
  pageNumbers: ReactElement[],
  currentPage: number,
  onPageChange: (page: number) => void,
  index: number
) => {
  pageNumbers.push(
    <li
      key={`pagination-${index}`}
      className={`${
        index === currentPage && "rounded-md bg-second_purple"
      } px-2`}
    >
      <button
        className={`hover:text-hover ${
          index === currentPage && "hover:text-white"
        }`}
        onClick={() => onPageChange(index)}
      >
        {index}
      </button>
    </li>
  );
};

const getPaginationList = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pageNumbers: ReactElement[] = [];

  if (totalPages <= 6) {
    for (let index = 1; index <= totalPages; index++) {
      addPaginationItem(pageNumbers, currentPage, onPageChange, index);
    }
  } else {
    if (currentPage + 4 < totalPages) {
      if (currentPage !== 1) {
        for (let index = currentPage - 1; index <= currentPage + 2; index++) {
          addPaginationItem(pageNumbers, currentPage, onPageChange, index);
        }
      } else {
        for (let index = currentPage; index <= currentPage + 3; index++) {
          addPaginationItem(pageNumbers, currentPage, onPageChange, index);
        }
      }

      if (currentPage !== totalPages - 4) {
        pageNumbers.push(<li key="ellipsis" className="tracking-widest">...</li>);
      }

      for (let index = totalPages - 1; index <= totalPages; index++) {
        addPaginationItem(pageNumbers, currentPage, onPageChange, index);
      }
    } else {
      for (let index = totalPages - 6; index <= totalPages; index++) {
        addPaginationItem(pageNumbers, currentPage, onPageChange, index);
      }
    }
  }

  return pageNumbers;
};

export default getPaginationList;
