import React from 'react';
import { string, object } from 'prop-types';

// TODO: use own module here
import styles from './index.module.css';

const getRepoLangMod = lang => lang ? `is-${lang.name.toLowerCase()}` : ``;

const Repo = ({ name, description, url, primaryLanguage }) => (
  <a href={url} target='_blank' rel='noopener'>
    <div className={styles[`recent-repos-repo`]}>
      <h3 className={styles[`recent-repos-repo-title`]}>{name}</h3>
      <p className='recent-repos-repo-desc mod-ellepsize'>{description}</p>
      <span className={`${styles[`recent-repos-repo-lang`]} ${getRepoLangMod(primaryLanguage)}`}>
        {primaryLanguage && primaryLanguage.name}
      </span>
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
