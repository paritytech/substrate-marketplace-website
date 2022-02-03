import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { useProjectLogos } from '../../hooks/use-project-logos';

export default function ProjectLogo({ name }) {
  const { projectLogos } = useProjectLogos();
  const findLogo = projectLogos.edges.find(logo => {
    return logo.node.name.toLowerCase() === name.toLowerCase();
  });
  const thisLogo = getImage(findLogo.node.logo[0]);
  const imageStyles = 'w-12 h-12 lg:w-[60px] lg:h-[60px] mr-5 sm:mt-1';

  return (
    <>
      {thisLogo ? (
        <GatsbyImage className={imageStyles} objectFit="contain" image={thisLogo} alt={name} />
      ) : (
        <img className={imageStyles} src={findLogo.node.publicURL} alt={name} />
      )}
    </>
  );
}
