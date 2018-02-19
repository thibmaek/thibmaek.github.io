import React from 'react';
import { string, object } from 'prop-types';

import './index.css';

const getRepoLangMod = lang => lang ? `is-${lang.name.toLowerCase()}` : ``;

const Repo = ({ name, description, url, primaryLanguage }) => (
  <a href={url} rel='noopener noreferrer nofollow' target='_blank'>
    <div className='recent-repos-repo'>
      <h3 className='recent-repos-repo-title'>{name}</h3>
      <p className='recent-repos-repo-desc mod-ellepsize'>{description}</p>
      <span className={`recent-repos-repo-lang ${getRepoLangMod(primaryLanguage)}`}>
        {primaryLanguage && primaryLanguage.name}
      </span>
    </div>
  </a>
);

Repo.defaultProps = {
  description: `No description…`,
  primaryLanguage: {
    color: ``,
    name: ``,
  },
};

Repo.propTypes = {
  description: string,
  name: string.isRequired,
  primaryLanguage: object,
  url: string.isRequired,
};

export default Repo;
