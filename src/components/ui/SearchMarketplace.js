import cx from 'classnames';
import React from 'react';

import Icon from '../default/Icon';

export default function SearchMarketplace() {
  return (
    <div
      className={cx(
        `flex items-center justify-between mx-auto p-2 border-2 border-transparent border-b-substrateGray cursor-text max-w-2xl`,
        `lg:p-6 lg:rounded`,
        `duration-150 ease-in-out hover:border-substrateDark`
      )}
    >
      <p className="mb-0 pr-4 text-sm text-substrateDark dark:text-white text-opacity-25 lg:text-opacity-60 dark:text-opacity-90">
        Search Marketplace
      </p>
      <Icon name="searchIcon" className="h-4 w-4 lg:h-6 lg:w-6 fill-current text-substrateDark dark:text-white" />
    </div>
  );
}
