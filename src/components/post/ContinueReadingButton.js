import React from 'react';
import { string } from 'prop-types';
import Link from 'gatsby-link';

import './styles/ContinueReadingButton.css';

const ContinueReadingButton = ({ slug }) => (
  <Link className='post-preview-continue' to={`/post/${slug}`}>
    Continue reading
  </Link>
);

ContinueReadingButton.propTypes = {
  slug: string.isRequired,
};

export default ContinueReadingButton;
