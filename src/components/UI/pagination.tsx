import getPaginationList, {
  PaginationProps,
} from "@/utils/get-pagination-list";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { LuArrowLeftToLine, LuArrowRightToLine } from "react-icons/lu";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex relative w-full h-[70px] sm:h-auto flex-row sm:gap-3 gap-1 justify-center items-center my-5 ">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={`border-indigo-300 cursor-pointer px-3 py-1 bg-second_purple hover:opacity-80 transition rounded-md sm:self-center self-start ${
          currentPage === 1 && "disabled:opacity-25"
        }`}
      >
        <LuArrowLeftToLine size={20} />
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`border-indigo-300 cursor-pointer px-3 py-1 bg-second_purple hover:opacity-80 transition rounded-md sm:self-center self-start ${
          currentPage === 1 && "disabled:opacity-25"
        }`}
      >
        <FaArrowLeft size={20} />
      </button>
      <ul className="flex flex-row sm:gap-1 gap-0 items-center sm:self-center self-start">
        {getPaginationList({
          currentPage,
          totalPages,
          onPageChange,
        })}
      </ul>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`border-indigo-300 cursor-pointer px-3 py-1 bg-second_purple hover:opacity-80 transition rounded-md sm:self-center self-start ${
          currentPage === totalPages && "disabled:opacity-25"
        }`}
      >
        <FaArrowRight size={20} />
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`border-indigo-300 cursor-pointer px-3 py-1 bg-second_purple hover:opacity-80 transition rounded-md sm:self-center self-start ${
          currentPage === totalPages && "disabled:opacity-25"
        }`}
      >
        <LuArrowRightToLine size={20} />
      </button>
    </div>
  );
};

export default Pagination;
