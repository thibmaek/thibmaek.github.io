// @flow
import React from 'react';
import Link from 'gatsby-link';

import './Pagination.css';

type Props = {
  first?: boolean,
  index: number,
  last?: boolean,
  nextUrl: string,
  pageCount: number,
  prevUrl: string,
}

const Pagination = ({
  nextUrl,
  prevUrl,
  first,
  last,
  index,
  pageCount,
}: Props) => (
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

Pagination.defaultProps = {
  first: true,
  last: false,
};

export default Pagination;
