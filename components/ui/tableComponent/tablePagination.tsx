"use client";

import { usePaginationContext } from "@/context/paginateContext";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function TablePagination() {
  const {
    currentPage,
    totalPages,
    handlePrev,
    handleNext,
    goToPageNumber,
    previousBtnState,
    nextBtnState,
    pageSize,
    totalCount,
  } = usePaginationContext();

  if (totalPages <= 0) {
    return null; // Don't render pagination if there are no pages
  }

  if (currentPage < 1 || currentPage > totalPages) {
    console.error("Invalid currentPage value");
    return null;
  }

  return (
    <section className="container flex flex-wrap items-center justify-between gap-3 py-6 text-sm">
      <nav aria-label="Pagination" className="w-full max-w-lg">
        <article className="text-Grey1 flex items-center justify-between gap-2">
          {/* Previous Button */}
          <button
            disabled={previousBtnState}
            onClick={handlePrev}
            aria-label="Previous Page"
            className="hover:text-pryColor flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <FaAngleLeft size={20} /> Previous
          </button>

          {/* Page Numbers */}
          {renderPageNumbers(currentPage, totalPages, goToPageNumber)}

          {/* Next Button */}
          <button
            disabled={nextBtnState}
            onClick={handleNext}
            aria-label="Next Page"
            className="hover:text-pryColor flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
            <FaAngleRight size={20} />
          </button>
        </article>
      </nav>

      <p className="text-Grey1 text-sm font-medium">
        Showing {pageSize} of {totalCount} result{" "}
      </p>
      {/* Page Limit Selector */}
      {/* <select
        onChange={(e) => setPageLimit(Number(e.target.value))}
        className="border-Platinum rounded-md border p-1"
      >
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
        <option value={50}>50 per page</option>
      </select> */}
    </section>
  );
}

export function PageNumber({
  currentPage,
  index,
  goToPageNumber,
}: {
  currentPage: number;
  index: number;
  goToPageNumber: (pageNumber: number) => void;
}) {
  return (
    <button
      onClick={() => goToPageNumber(index)}
      className={`flex size-6 items-center justify-center rounded-full transition-colors hover:bg-gray-100 ${
        currentPage === index ? "bg-Grey7 font-semibold text-[#4F46E5]" : ""
      }`}
    >
      {index}
    </button>
  );
}

export const renderPageNumbers = (
  currentPage: number,
  totalPages: number,
  goToPageNumber: (pageNumber: number) => void,
  maxVisiblePages: number = 5, // Configurable number of visible pages
) => {
  const pageNumbers = [];

  if (totalPages <= maxVisiblePages) {
    // Show all pages if total pages are less than or equal to maxVisiblePages
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PageNumber
          key={i}
          currentPage={currentPage}
          index={i}
          goToPageNumber={goToPageNumber}
        />,
      );
    }
  } else {
    // Always show the first page
    pageNumbers.push(
      <PageNumber
        key={1}
        currentPage={currentPage}
        index={1}
        goToPageNumber={goToPageNumber}
      />,
    );

    // Calculate the range of pages to show around the current page
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    // Add ellipsis if the current page is not near the start
    if (currentPage > 3) {
      pageNumbers.push(
        <span
          key="ellipsis-start"
          className="flex size-6 items-center justify-center"
        >
          ...
        </span>,
      );
    }

    // Add the range of pages around the current page
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PageNumber
          key={i}
          currentPage={currentPage}
          index={i}
          goToPageNumber={goToPageNumber}
        />,
      );
    }

    // Add ellipsis if the current page is not near the end
    if (currentPage < totalPages - 2) {
      pageNumbers.push(
        <span
          key="ellipsis-end"
          className="flex size-6 items-center justify-center"
        >
          ...
        </span>,
      );
    }

    // Always show the last page
    pageNumbers.push(
      <PageNumber
        key={totalPages}
        currentPage={currentPage}
        index={totalPages}
        goToPageNumber={goToPageNumber}
      />,
    );
  }

  return pageNumbers;
};
