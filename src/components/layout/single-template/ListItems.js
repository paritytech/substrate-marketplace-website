import cx from 'classnames';
import React, { useState } from 'react';

import Icon from '../../default/Icon';
import { Link } from '../../default/Link';

const listClass = 'ml-2';
const unorderedListClass = 'list-none';
const hoverStyles = 'duration-150 ease-in-out border-b border-transparent hover:border-b hover:border-substrateBlue';
const blueText = 'text-substrateBlue dark:text-substrateBlue-light';

const DevLinks = ({ data, type = 'home' }) => (
  <div className="flex items-center mb-2">
    <Icon className={`ml-4 mr-2 -mt-0.5 fill-current ${blueText}`} name={type === 'repo' ? 'repo' : 'link'} />
    <Link to={data} className={`${blueText} ${hoverStyles}`}>
      {type === 'repo' ? 'Repository' : 'Homepage'}
    </Link>
  </div>
);

const Insights = ({ data }) => (
  <ul className={unorderedListClass}>
    <li className={listClass}>{data.stars} stars</li>
    {data.insights
      .filter(each => each.metricName != 'stargazers')
      .map(({ metricValue, metricName }, index) => {
        return (
          <li key={index} className={listClass}>
            {metricValue} {metricName.replace(/([a-z])([A-Z])/g, '$1 $2')}
          </li>
        );
      })}
  </ul>
);

const Runtimes = ({ data }) => (
  <ul className={unorderedListClass}>
    {data.map(({ listing }, index) => {
      return (
        <li key={index}>
          <Link to={`/runtimes/${listing.name}`} className={listClass}>
            {listing.name}
          </Link>
        </li>
      );
    })}
  </ul>
);

const Version = ({ data }) => (
  <ul className={unorderedListClass}>
    {data.map((version, index) => (
      <li key={index} className={listClass}>
        {version === 'VERSION_2_0' ? 'Substrate 2.0' : version === 'VERSION_3_0' ? 'Substrate 3.0' : version}
      </li>
    ))}
  </ul>
);

const Dependencies = ({ section, data, moreThan4 }) => {
  const [displayText, setDisplayText] = useState(moreThan4);
  const [count, setCount] = useState(4);
  return (
    <>
      {section === 'forwardDependencies' && <div className={cx('font-semibold ml-4 mb-2')}>Using:</div>}
      {section === 'reverseDependencies' && <div className={cx('font-semibold ml-4 mb-2')}>Used by:</div>}
      <ul className={cx('overflow-auto overscroll-contain ml-4', unorderedListClass)}>
        {data.slice(0, count).map((each, index) => {
          const slug = each.dependency.type.toLowerCase() + 's';
          return (
            <li key={index} className={`inline-block mb-2 ${blueText}`}>
              <Link className={`pb-0.5 ${hoverStyles}`} to={`/${slug}/${each.dependency.name}`}>
                {each.dependency.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {displayText && (
        <div className="ml-4">
          and{' '}
          <span
            className={`cursor-pointer ${blueText} ${hoverStyles}`}
            onClick={() => {
              setDisplayText(false);
              setCount(data.length);
            }}
          >
            {data.length - 4} more
          </span>
        </div>
      )}
    </>
  );
};

const List = ({ data }) => (
  <ul className={unorderedListClass}>
    <li className="ml-2 capitalize">{data}</li>
  </ul>
);

export default function ListItems({ section, data, type, moreThan4 }) {
  return (
    <>
      {section === 'dev' ? (
        <DevLinks data={data} type={type} />
      ) : section === 'insights' ? (
        <Insights data={data} />
      ) : section === 'runtimes' ? (
        <Runtimes data={data} />
      ) : section === 'forwardDependencies' ? (
        <Dependencies section={section} data={data} moreThan4={moreThan4} />
      ) : section === 'reverseDependencies' ? (
        <Dependencies section={section} data={data} moreThan4={moreThan4} />
      ) : section === 'version' ? (
        <Version section={section} data={data} />
      ) : (
        <List data={data} />
      )}
    </>
  );
}
