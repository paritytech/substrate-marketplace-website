import React, { useEffect, useState } from 'react';

import { slugify } from '../../../utils/url';
import Icon from '../../default/Icon';
import { Link } from '../../default/Link';

const Card = ({ name, version, authors, description }) => {
  return (
    <Link to={`/pallets/${slugify(name)}/`} className="w-full duration-300 ease-in-out hover:scale-105">
      <div className="relative h-44 px-4 py-3 bg-substrateGray-light dark:bg-substrateDark rounded-md shadow-md">
        <div className="absolute top-0 right-0 py-2 px-3 bg-substrateGreen-light dark:bg-substrateGreen rounded-tr-md rounded-bl-md font-bold text-xs">
          {version}
        </div>
        <div>
          <h5 className="mb-2 truncate md:w-60 xl:w-auto 2xl:w-60">{name}</h5>
          <p className="text-sm mb-4">{authors ? authors : 'N/A'}</p>
          <p className="text-sm mb-0 h-20 text-ellipsis overflow-hidden">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default function CardsContainer({ data, section, selectedVersion, searchQuery, selectedCategory }) {
  const cardsData = data.data.marketplace.search.results;
  const [displayedData, setDisplayedData] = useState({});
  const [displayedDataAvailable, setDisplayedDataAvailable] = useState();

  useEffect(() => {
    const filteredData = cardsData
      .filter(each => each.compatibilityVersion === selectedVersion)
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
    displayedData.length === 0 ? setDisplayedDataAvailable(true) : setDisplayedDataAvailable(false);
  }, [displayedData]);

  return (
    <>
      {displayedData.length > 0 ? (
        <div className="w-1/1 grid gap-y-8 md:grid-cols-2 md:gap-x-6 2xl:grid-cols-3">
          {displayedData.map((each, index) => (
            <Card
              key={index}
              name={each.name}
              version={each.version}
              authors={each.authors}
              description={each.description}
            />
          ))}
        </div>
      ) : (
        <>
          {displayedDataAvailable && (
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
