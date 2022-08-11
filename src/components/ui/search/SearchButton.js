import { Icon } from 'gatsby-plugin-substrate';
import React from 'react';

export default function SearchButton({ handleSearchOpen }) {
  return (
    <button
      className="bg-substrateGreen inline-flex items-center relative rounded-md px-8 py-4 text-xl hover:opacity-80"
      onClick={handleSearchOpen}
    >
      <span className="font-bold text-white mb-0 mr-4">Search Marketplace</span>
      <Icon name="search" className="h-4 w-4 lg:h-6 lg:w-6 fill-current text-white dark:text-white" />
    </button>
  );
}
