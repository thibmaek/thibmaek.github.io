import React from 'react';

import './index.css';

const getRepoLangMod = lang => lang ? `is-${lang.name.toLowerCase()}` : ``;

type Props = {
  name: string,
  description?: string,
  primaryLanguage?: {
    name: string,
  },
  url: string,
}

const Repo = ({ name, description, url, primaryLanguage }: Props) => (
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
    name: ``,
  },
};

export default Repo;
