import cx from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

import { Link } from '../../default/Link';
import SecondaryButton from '../../ui/SecondaryButton';

export default function Card({ title, text, link, image }) {
  return (
    <Link to={link}>
      <div
        className={cx(
          'bg-substrateGray-light rounded-md mb-4 lg:mx-4 lg:mb-8 md:md-10 shadow-md lg:w-[438px] xl:w-[540px]',
          'hover:scale-105 transition-transform',
          'dark:bg-substrateBlackish'
        )}
      >
        <GatsbyImage
          className="block h-28 object-cover rounded-t-md"
          image={image}
          alt={`Substrate Marketplace ${title}`}
        />
        <div className="p-6 lg:p-9">
          <p className="text-2xl font-bold">{title}</p>
          <p className="sm:h-14">{text}</p>
          <div className="text-center sm:text-left">
            <SecondaryButton fullWidth hero>
              Browse {title}
            </SecondaryButton>
          </div>
        </div>
      </div>
    </Link>
  );
}
