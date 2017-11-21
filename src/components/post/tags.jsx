import React from 'react';
import { array } from 'prop-types';
import Link from 'gatsby-link';

import './styles/tag.css';

// TODO: Add a link which goes to the tag-group page
const Tags = ({ tags }) => (
  <ul className='post-preview-tags'>
    {tags.map(tag =>
      <Link key={tag} to={`/tag/${tag}`}>
        <li>{tag.toLowerCase()}</li>
      </Link>
    )}
  </ul>
);

Tags.defaultProps = {
  tags: [],
};

Tags.propTypes = {
  tags: array.isRequired,
};

export default Tags;
