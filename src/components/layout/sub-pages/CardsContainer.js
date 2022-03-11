import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import Icon from '../../default/Icon';
import { Card, ProjectCard } from './Cards';
import Pagination from './Pagination';

export default function CardsContainer({ data, section, selectedVersion, searchQuery, selectedCategory }) {
  const cardsData = data.data.marketplace.search.results;
  const [displayedData, setDisplayedData] = useState([]);
  const [dataAvailable, setDataAvailable] = useState(false);
  const [noResults, setNoResults] = useState(false);

  /* Pagination State & Calculation*/
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(12);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstard = indexOfLastCard - cardsPerPage;
  const currentCards = displayedData.slice(indexOfFirstard, indexOfLastCard);
  const paginate = number => {
    setCurrentPage(number);
  };

  useEffect(() => {
    const filteredData = cardsData
      .filter(each => {
        if (section === 'projects') {
          return each;
        } else {
          return each.compatibilityVersion === selectedVersion;
        }
      })
      .filter(each => {
        if (selectedCategory === 'all') {
          return each;
        } else if (each.categories && each.categories.toLowerCase().includes(selectedCategory)) {
          return each;
        }
      })
      .filter(each => {
        if (searchQuery.length === 0) {
          return each;
        } else if (each.name.toLowerCase().includes(searchQuery)) {
          return each;
        }
      });
    setDisplayedData(filteredData);
  }, [selectedCategory, selectedVersion, searchQuery]);

  useEffect(() => {
    displayedData.length > 0 ? setDataAvailable(true) : setDataAvailable(false);
    displayedData.length === 0 ? setNoResults(true) : setNoResults(false);
    paginate(1);
  }, [displayedData]);

  return (
    <>
      {dataAvailable ? (
        <>
          <div className="lg:min-h-[800px]">
            <div
              className={cx('mb-8 w-1/1 grid md:grid-cols-2 2xl:grid-cols-3', {
                ' gap-y-8 md:gap-x-6': section != 'projects',
              })}
            >
              {currentCards.map((each, index) => (
                <div key={index}>
                  {section === 'projects' ? (
                    <ProjectCard
                      name={each.name}
                      categories={each.categories}
                      stars={each.listingInsights.stars}
                      description={each.description}
                    />
                  ) : (
                    <Card
                      section={section}
                      name={each.name}
                      version={each.version}
                      authors={each.authors}
                      description={each.description}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {displayedData.length > 12 && (
            <Pagination
              cardsPerPage={cardsPerPage}
              totalCards={displayedData.length}
              currentPage={currentPage}
              paginate={paginate}
            />
          )}
        </>
      ) : (
        <>
          {noResults && (
            <div className="border dark:border-substrateGray-dark rounded-md flex flex-col items-center py-8">
              <Icon name="noResults" className="fill-current mb-8" />
              <p className="text-center px-4">No {section} found. Try a different version or search query.</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
