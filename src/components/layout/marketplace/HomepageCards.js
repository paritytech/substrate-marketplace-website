import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';

import Card from './Card';

export default function HomepageCards() {
  const images = useStaticQuery(graphql`
    {
      runtimesImage: file(name: { eq: "runtimes-home" }) {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
      palletsImage: file(name: { eq: "pallets-home" }) {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
      projectsImage: file(name: { eq: "projects-home" }) {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  const runtimeImage = getImage(images.runtimesImage);
  const palletsImage = getImage(images.palletsImage);
  const projectsImage = getImage(images.projectsImage);
  const cardContent = [
    {
      title: `Runtimes`,
      text: `See examples of the business logic enabled from combining capabilities of the pallets.`,
      link: `/runtimes`,
      image: runtimeImage,
    },
    {
      title: `Pallets`,
      text: `Browse through open source modules that give your blockchain specific capabilities.`,
      link: `/pallets`,
      image: palletsImage,
    },
    {
      title: `Projects`,
      text: `Discover what others are building, gain ideas, get inspired.`,
      link: `/projects`,
      image: projectsImage,
    },
  ];

  return (
    <div className="flex flex-wrap justify-start xl:w-[1148px]">
      {cardContent.map(({ title, text, link, image }, index) => {
        return (
          <div key={index}>
            <Card title={title} text={text} link={link} image={image} />
          </div>
        );
      })}
    </div>
  );
}
