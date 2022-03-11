import { useMemo } from 'react';

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({ totalCards, cardsPerPage, siblingCount = 1, currentPage }) => {
  const paginationRange = useMemo(() => {
    const pageCount = Math.ceil(totalCards / cardsPerPage);
    /* siblingCount defines how many pages show on each side of current page */
    const DOTS = '...';
    const totalPageNumbers = siblingCount + 5;
    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers > pageCount) {
      return range(1, pageCount);
    }
    /*
    	Calculate left and right sibling index
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, pageCount);
    /*
      Variables to determine if ther left or right dots should be visible
    */
    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < pageCount - 2;
    const firstPageIndex = 1;
    const lastPageIndex = pageCount;
    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!showLeftDots && showRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, pageCount];
    }
    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (showLeftDots && !showRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(pageCount - rightItemCount + 1, pageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }
    /*
    	Case 4: Both left and right dots to be shown
    */
    if (showLeftDots && showRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCards, cardsPerPage, siblingCount, currentPage]);
  return paginationRange;
};
