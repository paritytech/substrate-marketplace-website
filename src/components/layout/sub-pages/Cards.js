import React from 'react';

import { slugify } from '../../../utils/url';
import Icon from '../../default/Icon';
import { Link } from '../../default/Link';
import ProjectLogo from '../../ui/ProjectLogo';

const Card = ({ name, section, version, authors, description }) => {
  return (
    <Link to={`/${section}/${slugify(name)}/`} className="w-full duration-300 ease-in-out hover:scale-105">
      <div className="relative h-44 px-4 py-3 bg-substrateGray-light dark:bg-substrateDark rounded-md shadow-md">
        <div className="absolute top-0 right-0 py-2 px-3 bg-substrateGreen-light dark:bg-substrateGreen rounded-tr-md rounded-bl-md font-bold text-xs">
          {version}
        </div>
        <h5 className="mb-2 truncate md:w-60 xl:w-auto 2xl:w-60">{name}</h5>
        <p className="text-sm mb-4">{authors ? authors : 'N/A'}</p>
        <p className="text-sm mb-0 h-20 line-clamp-4">{description}</p>
      </div>
    </Link>
  );
};

function ProjectCard({ stars, categories, description, name }) {
  return (
    <Link to={`/projects/${slugify(name)}/`} className="w-full duration-300 ease-in-out hover:scale-105">
      <div className="relative p-6 bg-substrateGray-light dark:bg-substrateDark rounded-md shadow-md">
        {stars > 0 && (
          <div className="absolute top-6 right-6 font-medium">
            <div className="flex items-center">
              <Icon name="star" className="mr-2" />
              <span>{stars}</span>
            </div>
          </div>
        )}
        <h5 className="text-2xl mb-2 truncate md:w-60 xl:w-auto 2xl:w-60">{name}</h5>
        <div className="text-sm mb-6">{categories}</div>
        <ProjectLogo
          projectName={name}
          className="w-12 h-12 mb-6 lg:w-[60px] lg:h-[60px] p-0.5 object-contain rounded-full dark:bg-gray-300"
        />
        <p className="text-sm mb-0 h-20 line-clamp-4">{description}</p>
      </div>
    </Link>
  );
}

export { Card, ProjectCard };
