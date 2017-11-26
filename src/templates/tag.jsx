import React from 'react';
import { object } from 'prop-types';
import Link from 'gatsby-link';

import './tag.css';

const TagPage = ({ data }) => {
  const { edges: tags } = data.allContentfulPost;

  return (
    <section className='main-tags-group'>
      <h1 className='tags-group-title'>hifi</h1>
      <ul className='tags-group-container'>
        {tags.map(({ node: tag }) => (
          <li key={tag.id} className='tags-group-item '>
            <Link to={`/post/${tag.slug}`}>{tag.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

TagPage.propTypes = {
  data: object.isRequired,
};

export const query = graphql`
  query TagsByGroupQuery($slug: String!) {
    allContentfulPost(filter: {
      tags: { eq: $slug }
    }) {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
  }
`;

export default TagPage;
