import React from 'react';
import { string, bool, number } from 'prop-types';
import Link from 'gatsby-link';
import cn from 'classnames';

import styles from './Pagination.module.css';

const Pagination = ({
  nextUrl,
  prevUrl,
  first,
  last,
  index,
  pageCount,
}) => (
  <div className={styles.container}>
    <Link
      className={cn(styles.btn, styles.prevBtn, { [styles.hidden]: first })}
      to={prevUrl}
    >
      Previous
    </Link>
    <span>Page {index} of {pageCount}</span>
    <Link
      className={cn(styles.btn, styles.nextBtn, { [styles.hidden]: last })}
      to={nextUrl}
    >
      Next
    </Link>
  </div>
);

Pagination.propTypes = {
  first: bool,
  index: number.isRequired,
  last: bool,
  nextUrl: string.isRequired,
  pageCount: number.isRequired,
  prevUrl: string.isRequired,
};

Pagination.defaultProps = {
  first: true,
  last: false,
};

export default Pagination;
