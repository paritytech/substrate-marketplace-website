import cx from 'classnames';
import { Link } from 'gatsby-plugin-substrate';
import React from 'react';

const ResultItem = ({ error, section, title }) => (
  <div
    className={cx(`group px-4 pt-2 pb-3 mr-3 mb-2 bg-substrateGray dark:bg-gray-700 rounded animate-fade-in-down`, {
      'group-hover:font-bold group-hover:text-white hover:bg-substrateGreen': !error,
    })}
  >
    <span className="text-xs capitalize group-hover:font-bold group-hover:text-white">{section}</span>
    <p
      className={cx(
        `mb-0 capitalize truncate`,
        { 'text-substrateRed': error },
        { 'group-hover:font-bold group-hover:text-white': !error }
      )}
    >
      {title}
    </p>
  </div>
);
export default function Results({ noLink, error, section, title, slug }) {
  return (
    <>
      {noLink || error ? (
        <ResultItem error={error} section={section} title={title} />
      ) : (
        <Link to={slug}>
          <ResultItem section={section} title={title} />
        </Link>
      )}
    </>
  );
}
