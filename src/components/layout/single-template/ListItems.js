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

const List = ({ data }) => (
  <ul className={unorderedListClass}>
    <li className="ml-4">{data}</li>
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
      ) : (
        <List dat={data} />
      )}
    </>
  );
}
