import { useFilters } from "@/hooks/useFilter";
import React from "react";

interface PaginationProps {
  baseurl: string;
  totalPages: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const generatePageNumbers = (
  totalPages: number,
  pageSize: number,
  siblingCount: number,
  currentPage: number
) => {
  const totalNumbers = siblingCount * 2 + 5;

  if (totalPages <= totalNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

  const pages: (number | string)[] = [];

  if (shouldShowLeftDots) {
    pages.push(1, "...");
  } else {
    for (let i = 1; i < leftSiblingIndex; i++) {
      pages.push(i);
    }
  }

  for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
    pages.push(i);
  }

  if (shouldShowRightDots) {
    pages.push("...", totalPages);
  } else {
    for (let i = rightSiblingIndex + 1; i <= totalPages; i++) {
      pages.push(i);
    }
  }

  return pages;
};

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  pageSize,
  siblingCount = 1,
  currentPage,
  onPageChange,
  baseurl,
}) => {
  const pages = generatePageNumbers(
    totalPages,
    pageSize,
    siblingCount,
    currentPage
  );
  const { setFilters } = useFilters();

  const handlePageChange = (page: number) => {
    setFilters({basepath:baseurl, page: String(page) });
  };

  return (
    <div className="flex items-center gap-3 text-lg">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${
          currentPage === 1 ? "bg-zinc-300" : "bg-white"
        } border-2 border-zinc-300 px-2  rounded-md text-primary100 font-bold`}
      >
        {"<"}
      </button>
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && handlePageChange(page)}
          disabled={typeof page !== "number"}
          className={
            currentPage === page
              ? "text-primary100"
              : "border border-zinc-400 px-2 rounded-md"
          }
        >
          {page}
        </button>
      ))}
      <button
        onClick={() =>
          currentPage < totalPages && handlePageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className={`${
          currentPage === 1 ? "bg-zinc-300" : "bg-white"
        } border-2 border-zinc-300 px-2  rounded-md text-primary100 font-bold`}
      >
        {">"}
      </button>
    </div>
  );
};
