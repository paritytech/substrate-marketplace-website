import cx from 'classnames';
import React from 'react';

import { slugify } from '../../../utils/url';
import Results from './Results';

export default function ResultsContainer({ query, setQuery, results }) {
  const suggestedTerms = [
    'pallet-balances',
    'pallet-authorship',
    'beefy-node-runtime',
    'metaverse-runtime',
    'evan-test-pallet',
  ];

  return (
    <div className="h-full text-left">
      <div
        className={cx('text-sm font-bold uppercase', { invisible: query.length === 0 }, { visible: query.length > 0 })}
      >
        {results.length} results
      </div>
      <div className="overflow-y-auto overscroll-contain h-[400px]">
        {query.length === 0 ? (
          <div>
            {suggestedTerms.map((term, index) => (
              <div className="cursor-pointer" onClick={() => setQuery(term)} key={index}>
                <Results noLink section={`Suggestion`} title={term} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            {results.length > 0 ? (
              <div>
                {results.map((result, index) => {
                  return (
                    <div key={index}>
                      <Results
                        slug={`/${result.section}s/${slugify(result.name)}/`}
                        section={result.section}
                        title={result.name}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <Results error title={`Try another search term`} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
