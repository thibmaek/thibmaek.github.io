import React from 'react';
import Link from 'gatsby-link';

import './styles/tag.css';

type Props = {
  tags: Array<string>,
}

// TODO: Add a link which goes to the tag-group page
const Tags = ({ tags }: Props) => (
  <ul className='post-preview-tags'>
    {tags.map(tag =>
      (<Link key={tag} to={`/tag/${tag}`}>
        <li>{tag.toLowerCase()}</li>
      </Link>)
    )}
  </ul>
);

export default Tags;
