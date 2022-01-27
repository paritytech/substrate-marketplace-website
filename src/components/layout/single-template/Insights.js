import React from 'react';

export default function Insights({ data }) {
  return (
    <ul className="list-none">
      <li className="ml-2">{data.stars} stars</li>
      {data.insights.map(({ metricValue, metricName }, index) => {
        return (
          <li key={index} className="ml-2">
            {metricValue} {metricName.replace(/([a-z])([A-Z])/g, '$1 $2')}
          </li>
        );
      })}
    </ul>
  );
}
