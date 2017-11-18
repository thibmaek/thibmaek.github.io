import React from 'react';
import { string } from 'prop-types';

import './styles/tag.css';

// TODO: Add a link which goes to the tag-group page
const PostTag = ({ title }) => (
  <li class="post-tag">{title}</li>
);

PostTag.defaultProps = {
  title: '',
};

PostTag.propTypes = {
  title: string.isRequired,
};

export default PostTag;