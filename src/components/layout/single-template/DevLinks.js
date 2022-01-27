import React from 'react';

import Icon from '../../default/Icon';
import { Link } from '../../default/Link';

export default function DevLinks({ type = 'home', link }) {
  return (
    <div className="flex items-center mb-2">
      <Icon className="ml-4 mr-2" name={type === 'repo' ? 'repo' : 'link'} />
      <Link to={link} className="text-substrateBlue">
        {type === 'repo' ? 'Repository' : 'Homepage'}
      </Link>
    </div>
  );
}
