import React from 'react';
import { string } from 'prop-types';

import './styles/preview.css';

const PostPreview = ({ title }) => (
  <article className='post-preview'>
    <h2>{title}</h2>
  </article>
);

PostPreview.propTypes = {
  title: string.isRequired,
};

export default PostPreview;
