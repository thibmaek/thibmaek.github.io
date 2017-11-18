import React from 'react';
import { string, object } from 'prop-types';

import './index.css';

const Repo = ({ name, description, url, primaryLanguage }) => (
  <a href={url} target='_blank' rel='noopener'>
    <div className='recent-repos-repo'>
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{primaryLanguage && primaryLanguage.name}</span>
    </div>
  </a>
);

Repo.defaultProps = {
  primaryLanguage: {
    name: ``,
    color: ``,
  },
};

Repo.propTypes = {
  description: string.isRequired,
  name: string.isRequired,
  primaryLanguage: object,
  url: string.isRequired,
};

export default Repo;
