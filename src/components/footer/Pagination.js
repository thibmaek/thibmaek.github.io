import React from 'react';
import { string, bool, number } from 'prop-types';
import Link from 'gatsby-link';

import './Pagination.css';

const Pagination = ({
  nextUrl,
  prevUrl,
  first,
  last,
  index,
  pageCount,
}) => (
  <div className='pagination-container'>
    {!first && (
      <Link className='post-preview-continue previous' to={prevUrl}>
        Previous
      </Link>
    )}
    <span>
      Page {index} of {pageCount}
    </span>
    {!last && (
      <Link className='post-preview-continue next' to={nextUrl}>
        Next
      </Link>
    )}
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
