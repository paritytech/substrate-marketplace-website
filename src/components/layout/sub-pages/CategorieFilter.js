import cx from 'classnames';
import React from 'react';

export default function CategorieFilter({ setSelectedCategory, selectedCategory, categories }) {
  const listStyles = 'mb-8 capitalize cursor-pointer hover:text-substrateGreen';
  const handleCLick = event => {
    const dataName = event.target.getAttribute('data-name');
    setSelectedCategory(dataName);
  };

  return (
    <ul className="list-none">
      <li
        data-name="all"
        onClick={e => handleCLick(e)}
        className={cx(listStyles, {
          'font-bold text-substrateGreen': selectedCategory === 'all',
        })}
      >
        All
      </li>
      {categories
        .sort((a, b) => a.localeCompare(b))
        .map((cat, index) => {
          return (
            <li
              key={index}
              data-name={cat}
              onClick={e => handleCLick(e)}
              className={cx(listStyles, {
                'font-bold text-substrateGreen': cat === selectedCategory,
              })}
            >
              {cat}
            </li>
          );
        })}
    </ul>
  );
}
