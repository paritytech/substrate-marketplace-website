import React from 'react';

import Icon from '../../default/Icon';

export default function SearchButton({ handleSearchOpen }) {
  return (
    <button
      className="primary-button group bg-substrateGreen inline-flex relative rounded-md px-8 py-4 text-xl hover:opacity-80"
      onClick={handleSearchOpen}
    >
      <span className="font-bold text-white mb-0 mr-4">Search Marketplace</span>
      <div className="flex h-full">
        <Icon name="searchIcon" className="h-4 w-4 lg:h-6 lg:w-6 fill-current text-white dark:text-white" />
      </div>
    </button>
  );
}
