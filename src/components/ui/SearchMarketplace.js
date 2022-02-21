import cx from 'classnames';
import React, { useState } from 'react';

import useComponentVisible from '../../hooks/use-component-visible';
import Icon from '../default/Icon';
import Modal from './Modal';
import SearchInput from './search-ui/SearchInput';
import SearchResultsContainer from './search-ui/SearchResultsContainer';
import SearchSectionCheckbox from './search-ui/SearchSectionCheckbox';

export default function SearchMarketplace() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [query, setQuery] = useState('');
  console.log(query);
  const sections = ['Projects', 'Runtimes', 'Pallets'];

  return (
    <>
      <div
        onClick={() => setIsComponentVisible(!isComponentVisible)}
        className={cx(
          `flex items-center justify-between mx-auto p-2 border-2 border-transparent border-b-substrateGray cursor-text max-w-2xl`,
          `lg:p-6 lg:rounded`,
          `duration-150 ease-in-out hover:border-substrateDark dark:hover:border-substrateGray`
        )}
      >
        <p
          className={cx(
            `mb-0 pr-4 text-sm text-substrateDark dark:text-white text-opacity-25 dark:text-opacity-90`,
            `lg:text-opacity-60 lg:text-xl`
          )}
        >
          Search Marketplace
        </p>
        <Icon name="searchIcon" className="h-4 w-4 lg:h-6 lg:w-6 fill-current text-substrateDark dark:text-white" />
      </div>
      {isComponentVisible && (
        <Modal id={ref} closeModal={setIsComponentVisible}>
          <SearchInput query={query} setQuery={setQuery} />
          <div className="flex flex-col sm:flex-row mb-6">
            {sections.map((section, index) => (
              <SearchSectionCheckbox key={index}>{section}</SearchSectionCheckbox>
            ))}
          </div>
          <SearchResultsContainer query={query} setQuery={setQuery} />
        </Modal>
      )}
    </>
  );
}
