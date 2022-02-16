import cx from 'classnames';
import React from 'react';

import { sortCategories } from '../../../utils/sortCategories';

export default function CategorieFilter({ setSelectedCategory, selectedCategory, categories }) {
  const listStyles = 'mb-8 capitalize cursor-pointer hover:text-substrateGreen';
  const handleCLick = event => setSelectedCategory(event.target.innerText.toLowerCase());

  return (
    <ul className="list-none">
      <li
        onClick={e => handleCLick(e)}
        className={cx(listStyles, {
          'font-bold text-substrateGreen': selectedCategory === 'all',
        })}
      >
        All
      </li>
      {sortCategories(categories).map((cat, index) => {
        return (
          <li
            key={index}
            onClick={e => handleCLick(e)}
            className={cx(listStyles, {
              'font-bold text-substrateGreen': cat.name.toLowerCase() === selectedCategory,
            })}
          >
            {cat.name}
          </li>
        );
      })}
    </ul>
  );
}
