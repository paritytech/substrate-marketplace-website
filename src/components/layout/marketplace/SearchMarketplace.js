import React, { useEffect, useState } from 'react';

import useComponentVisible from '../../../hooks/use-component-visible';
import useSearchData from '../../../hooks/use-search-data';
import Modal from '../../ui/Modal';
import SearchHomepage from '../../ui/search-ui/SearchHomepage';
import SearchInput from '../../ui/search-ui/SearchInput';
import SearchResultsContainer from '../../ui/search-ui/SearchResultsContainer';
import SearchSectionCheckbox from '../../ui/search-ui/SearchSectionCheckbox';

export default function SearchMarketplace() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const searchData = useSearchData();
  const [query, setQuery] = useState('');
  const [isProjectsChecked, setIsProjectsChecked] = useState(false);
  const [isPalletsChecked, setIsPalletsChecked] = useState(false);
  const [isRuntimesChecked, setIsRuntimesChecked] = useState(false);
  const [results, setResults] = useState([]);
  const [displayedResults, setDisplayedResults] = useState([]);

  useEffect(() => {
    const sanitizedQuery = query.toLowerCase().replace(/\s/g, '');
    const filteredData = searchData.filter(
      result => result.name.includes(sanitizedQuery) || result.description.includes(sanitizedQuery)
    );
    setResults(filteredData);
  }, [query]);

  useEffect(() => {
    const sectionArray = {
      project: isProjectsChecked,
      runtime: isRuntimesChecked,
      pallet: isPalletsChecked,
    };
    const selectedSections = Object.entries(sectionArray)
      .filter(([, val]) => val)
      .map(([key]) => key);
    if (selectedSections.length === 0) {
      return setDisplayedResults(results);
    }
    const filteredResults = results.filter(result => selectedSections.indexOf(result.section) >= 0);
    setDisplayedResults(filteredResults);
  }, [results, isProjectsChecked, isRuntimesChecked, isPalletsChecked]);

  return (
    <>
      <SearchHomepage isComponentVisible={isComponentVisible} setIsComponentVisible={setIsComponentVisible} />
      {isComponentVisible && (
        <Modal id={ref} closeModal={setIsComponentVisible}>
          <SearchInput query={query} setQuery={setQuery} />
          <div className="flex flex-col sm:flex-row mb-6">
            <SearchSectionCheckbox isCheced={isProjectsChecked} setIsChecked={setIsProjectsChecked}>
              Projects
            </SearchSectionCheckbox>
            <SearchSectionCheckbox isCheced={isPalletsChecked} setIsChecked={setIsPalletsChecked}>
              Pallets
            </SearchSectionCheckbox>
            <SearchSectionCheckbox isCheced={isRuntimesChecked} setIsChecked={setIsRuntimesChecked}>
              Runtimes
            </SearchSectionCheckbox>
          </div>
          <SearchResultsContainer query={query} setQuery={setQuery} results={displayedResults} />
        </Modal>
      )}
    </>
  );
}
