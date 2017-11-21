import React from 'react';
import { array } from 'prop-types';

import './styles/tag.css';

// TODO: Add a link which goes to the tag-group page
const Tags = ({ tags }) => (
  <ul className='post-preview-tags'>
    {tags.map(tag => <li key={tag}>{tag}</li>)}
  </ul>
);

Tags.defaultProps = {
  tags: [],
};

Tags.propTypes = {
  tags: array.isRequired,
};

export default Tags;
