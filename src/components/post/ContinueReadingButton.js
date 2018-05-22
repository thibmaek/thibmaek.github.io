import React from 'react';
import { string } from 'prop-types';
import Link from 'gatsby-link';

import styles from './ContinueReadingButton.module.css';

const ContinueReadingButton = ({ slug }) => (
  <Link className={styles.container} to={`/post/${slug}`}>
    Continue reading
  </Link>
);

ContinueReadingButton.propTypes = {
  slug: string.isRequired,
};

export default ContinueReadingButton;
