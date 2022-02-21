import React from 'react';

import { Link } from '../../default/Link';

export default function SearchResult({ noLink, error, section, category, title, slug }) {
  return (
    <>
      {noLink || error ? (
        <div>
          <div
            className={`group text-left px-4 pt-2 pb-3 mb-2 bg-substrateGray dark:bg-gray-700  rounded animate-fade-in-down ${
              error ? '' : `group-hover:font-bold group-hover:text-white hover:bg-substrateGreen`
            }`}
          >
            <span className="text-xs capitalize group-hover:font-bold group-hover:text-white">{section}</span>
            <p
              className={`mb-0 capitalize ${
                error ? 'text-substrateRed' : `group-hover:font-bold group-hover:text-white`
              }`}
            >
              {category} {noLink || error ? '' : '-'} {title}
            </p>
          </div>
        </div>
      ) : (
        <Link to={slug}>
          <div
            className={`group px-4 pt-2 pb-3 mr-3 mb-2 bg-substrateGray dark:bg-gray-700  rounded animate-fade-in-down ${
              error ? '' : `group-hover:font-bold group-hover:text-white hover:bg-substrateGreen`
            }`}
          >
            <span className="text-xs capitalize group-hover:font-bold group-hover:text-white">{section}</span>
            <p
              className={`mb-0 capitalize ${
                error ? 'text-substrateRed' : `group-hover:font-bold group-hover:text-white`
              }`}
            >
              {category} {noLink || error ? '' : '-'} {title}
            </p>
          </div>
        </Link>
      )}
    </>
  );
}
