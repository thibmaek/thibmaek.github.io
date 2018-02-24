import React from 'react';
import Link from 'gatsby-link';

import './styles/ContinueReadingButton.css';

type Props = {
  slug: string,
}

const ContinueReadingButton = ({ slug }: Props) => (
  <Link className='post-preview-continue' to={`/post/${slug}`}>
    Continue reading
  </Link>
);

export default ContinueReadingButton;
