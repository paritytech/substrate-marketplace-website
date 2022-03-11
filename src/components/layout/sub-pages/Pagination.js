import cx from 'classnames';
import React from 'react';

import { usePagination } from '../../../hooks/use-pagination';

export default function Pagination({ cardsPerPage, totalCards, currentPage, paginate }) {
  const paginationRange = usePagination({
    currentPage,
    totalCards,
    cardsPerPage,
  });
  const handleClick = number => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
    paginate(number);
  };

  return (
    <nav>
      <ul className="list-none flex flex-wrap justify-center">
        {paginationRange.map((value, index) => (
          <li key={index}>
            {typeof value === 'number' ? (
              <button
                onClick={() => handleClick(value)}
                className={cx(
                  'mx-2 w-7 h-auto rounded-lg text-lg text-center cursor-pointer',
                  'duration-150 ease-in-out hover:bg-substrateDark hover:text-white',
                  {
                    'bg-substrateDark text-white': value === currentPage,
                  }
                )}
              >
                {value}
              </button>
            ) : (
              <span className={cx('mx-2 w-7 h-auto text-lg text-center')}>...</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
