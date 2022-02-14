import React from 'react';

import Card from './Card';

export default function CardsList({ data }) {
  return (
    <div className="flex flex-wrap justify-start xl:w-[1148px]">
      {data.map(({ node }) => {
        const { title, description, link, image } = node.frontmatter;
        return (
          <div key={node.id}>
            <Card title={title} text={description} link={link} image={image} />
          </div>
        );
      })}
    </div>
  );
}
