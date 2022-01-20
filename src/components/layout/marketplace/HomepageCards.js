import React from 'react';

import Card from './Card';

export default function HomepageCards() {
  const cardContent = [
    {
      title: `runtimes`,
      text: `See examples of the business logic enabled from combining capabilities of the pallets.`,
      link: `/runtimes`,
    },
    {
      title: `pallets`,
      text: `Browse through open source modules that give your blockchain specific capabilities.`,
      link: `/pallets`,
    },
    {
      title: `projects`,
      text: `Discover what others are building, gain ideas, get inspired.`,
      link: `/projects`,
    },
  ];

  return (
    <div className="flex flex-wrap justify-start xl:w-[1148px]">
      {cardContent.map(({ title, text, link }, index) => {
        return (
          <div key={index}>
            <Card title={title} text={text} link={link} />
          </div>
        );
      })}
    </div>
  );
}
