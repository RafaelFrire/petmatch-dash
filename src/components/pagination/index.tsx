import { useFilters } from "@/hooks/useFilter";
import React from "react";

interface PaginationProps {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const generatePageNumbers = (
  totalCount: number,
  pageSize: number,
  siblingCount: number,
  currentPage: number
) => {
  const totalPages = Math.ceil(totalCount / pageSize);
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
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
  onPageChange,
}) => {
  const pages = generatePageNumbers(
    totalCount,
    pageSize,
    siblingCount,
    currentPage
  );
  const totalPages = Math.ceil(totalCount / pageSize);
  const { setFilters } = useFilters();

  React.useEffect(() => {
    setFilters({
      page: String(currentPage),
    });
  }, [currentPage]);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={typeof page !== "number"}
          className={currentPage === page ? "text-primary100" : ""}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};
