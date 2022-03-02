import cx from 'classnames';
import React from 'react';

export default function Pagination({ cardsPerPage, totalCards, currentPage, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="list-none flex flex-wrap justify-center">
        {pageNumbers.map(number => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={cx(
              'mx-2 w-7 h-auto rounded-lg text-lg text-center cursor-pointer',
              'duration-150 ease-in-out hover:bg-substrateDark hover:text-white',
              {
                'bg-substrateDark text-white': number === currentPage,
              }
            )}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
}
