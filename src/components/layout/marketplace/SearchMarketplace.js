import React, { useEffect, useState } from 'react';

import useComponentVisible from '../../../hooks/use-component-visible';
import useSearchData from '../../../hooks/use-search-data';
import Modal from '../../ui/Modal';
import Checkbox from '../../ui/search/Checkbox';
import Input from '../../ui/search/Input';
import ResultsContainer from '../../ui/search/ResultsContainer';
import SearchButton from '../../ui/search/SearchButton';

export default function SearchMarketplace() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const searchData = useSearchData();
  const [query, setQuery] = useState('');
  const [isProjectsChecked, setIsProjectsChecked] = useState(false);
  const [isPalletsChecked, setIsPalletsChecked] = useState(false);
  const [isRuntimesChecked, setIsRuntimesChecked] = useState(false);
  const [results, setResults] = useState([]);
  const [displayedResults, setDisplayedResults] = useState([]);

  const handleSearchOpen = () => {
    setIsComponentVisible(!isComponentVisible);
    console.log(isComponentVisible);
  };

  useEffect(() => {
    const sanitizedQuery = query.toLowerCase();
    const filteredData = searchData.filter(
      result =>
        result.name.toLowerCase().includes(sanitizedQuery) || result.description.toLowerCase().includes(sanitizedQuery)
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
      setDisplayedResults(results);
    } else {
      const filteredResults = results.filter(result => selectedSections.indexOf(result.section) >= 0);
      setDisplayedResults(filteredResults);
    }
  }, [results, isProjectsChecked, isRuntimesChecked, isPalletsChecked]);

  return (
    <>
      <SearchButton handleSearchOpen={handleSearchOpen} />
      {isComponentVisible && (
        <Modal id={ref} closeModal={setIsComponentVisible}>
          <Input query={query} setQuery={setQuery} />
          <div className="flex flex-col sm:flex-row mb-6">
            <Checkbox isChecked={isProjectsChecked} setIsChecked={setIsProjectsChecked} name={'Projects'} />
            <Checkbox isChecked={isPalletsChecked} setIsChecked={setIsPalletsChecked} name={'Pallets'} />
            <Checkbox isChecked={isRuntimesChecked} setIsChecked={setIsRuntimesChecked} name={'Runtimes'} />
          </div>
          <ResultsContainer query={query} setQuery={setQuery} results={displayedResults} />
        </Modal>
      )}
    </>
  );
}
