import cx from 'classnames';
import React from 'react';

import Icon from '../../default/Icon';
import { Link } from '../../default/Link';

const listClass = 'ml-2';
const unorderedListClass = 'list-none';

const DevLinks = ({ data, type = 'home' }) => (
  <div className="flex items-center mb-2">
    <Icon className="ml-4 mr-2" name={type === 'repo' ? 'repo' : 'link'} />
    <Link to={data} className="text-substrateBlue">
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
const Lists = ({ section, data }) => {
  return (
    <>
      {section === 'forwardDependencies' && <div className={cx('font-semibold ml-4 mb-2')}>Using:</div>}
      {section === 'reverseDependencies' && <label className={cx('font-semibold ml-4 mb-2')}>Used by:</label>}
      <ul
        className={cx(
          'overflow-auto overscroll-contain shadow-inner ml-4',
          { 'h-64 border': data.length > 9 },
          unorderedListClass
        )}
      >
        {data.map((each, index) => {
          const slug = each.dependency.type.toLowerCase() + 's';
          return (
            <li key={index} className={cx({ 'ml-2': data.length > 9 })}>
              <Link to={`/${slug}/${each.dependency.name}`}>{each.dependency.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const List = ({ data }) => (
  <ul className={unorderedListClass}>
    <li className="ml-2 capitalize">{data}</li>
  </ul>
);

export default function ListItems({ section, data, type }) {
  return (
    <>
      {section === 'dev' ? (
        <DevLinks data={data} type={type} />
      ) : section === 'insights' ? (
        <Insights data={data} />
      ) : section === 'runtimes' ? (
        <Runtimes data={data} />
      ) : section === 'forwardDependencies' ? (
        <Lists section={section} data={data} />
      ) : section === 'reverseDependencies' ? (
        <Lists section={section} data={data} />
      ) : section === 'version' ? (
        <Version section={section} data={data} />
      ) : (
        <List data={data} />
      )}
    </>
  );
}
