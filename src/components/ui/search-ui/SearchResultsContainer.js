import React from 'react';

import SearchResult from './SearchResult';

export default function SearchResultsContainer({ query, setQuery }) {
  const suggestedTerms = [
    'pallet-balances',
    'pallet-authorship',
    'beefy-node-runtime',
    'meataverse-runtime',
    'event-test-pallet',
  ];
  return (
    <div className="h-full text-left">
      <div className={`${query.length === 0 ? 'invisible' : 'visible'} text-sm font-bold mb-3 animate-fade-in`}>
        # RESULTS
      </div>
      <div className="overflow-y-auto overscroll-contain h-[400px]">
        {query.length === 0 ? (
          <div>
            {suggestedTerms.map((term, index) => (
              <div className="cursor-pointer" onClick={() => setQuery(term)} key={index}>
                <SearchResult noLink section={`Suggestion`} title={term} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            {/* {results.length > 0 ? (
              <div>
                {results.map((result, index) => {
                  return (
                    <div key={index}>
                      <SearchResult
                        slug={result.slug}
                        section={result.section}
                        category={result.category}
                        title={result.title}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <SearchResult error title={`Try another search term`} />
              </div>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
}
