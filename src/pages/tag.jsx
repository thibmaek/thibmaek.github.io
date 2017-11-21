import React from 'react';
import { object } from 'prop-types';
import Link from 'gatsby-link';

const TagGroup = ({ data }) => {
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

TagGroup.propTypes = {
  data: object.isRequired,
};

export const query = graphql`
  query TagsByGroupQuery {
    allContentfulPost(filter: {
      tags: { eq: "raspberry-pi" }
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

export default TagGroup;
