import React from 'react';

import { useProjectLogos } from '../../hooks/use-project-logos';

export default function ProjectLogo({ projectName, className }) {
  const { projectLogos } = useProjectLogos();
  const thisLogo = projectLogos.edges.find(logo => {
    return logo.node.name.toLowerCase() === projectName.toLowerCase();
  });
  return <>{thisLogo && <img className={className} src={thisLogo.node.publicURL} alt={projectName} />}</>;
}
