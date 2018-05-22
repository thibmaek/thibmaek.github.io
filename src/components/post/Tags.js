import React from 'react';
import { array } from 'prop-types';
import Link from 'gatsby-link';

import styles from './Tag.module.css';

const Tags = ({ tags }) => (
  <ul className={styles.tagItems}>
    {tags.map(tag => (
      <Link key={tag} to={`/tag/${tag}`}>
        <li className={styles.tagItem}>
          {tag.toLowerCase()}
        </li>
      </Link>
    ))}
  </ul>
);

Tags.propTypes = {
  tags: array.isRequired,
};

export default Tags;
