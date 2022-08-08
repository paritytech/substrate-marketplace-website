import { Icon } from 'gatsby-plugin-substrate';
import React from 'react';

export default function Input({ query, setQuery }) {
  return (
    <div className="flex items-center justify-between w-full pb-0.5 mb-6 border-b-2 border-substrateGray">
      <Icon name="search" className="h-4 w-4 md:h-6 md:w-6 fill-current text-substrateDark dark:text-white" />
      <input
        className="form-input w-full pl-4 text-lg md:text-2xl border-none dark:bg-gray-900 focus:ring-0 cursor-text"
        type="text"
        value={query}
        placeholder="Search Marketplace"
        onChange={e => setQuery(e.target.value)}
        autoFocus
      />
    </div>
  );
}
