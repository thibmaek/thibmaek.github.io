import React from "react";
import { shape, string, array } from 'prop-types';

import Link from "gatsby-link";

const Tag = ({ pathContext, data }) => {
  const { tag } = pathContext;

  return (
    <div>
      <h1>{tag}</h1>
      <ul>
        {console.log(data.allContentfulPost.edges)}
      </ul>
      <Link to='/tags'>All tags</Link>
    </div>
  );
};

Tag.propTypes = {
  pathContext: shape({
    tag: string.isRequired,
  }).isRequired,
  data: shape({
    allContentfulPost: shape({
      edges: array,
    }),
  }).isRequired,
};

export default Tag;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allContentfulPost(
      limit: 100,
      filter: {
        tags: { in: [$tag] }
      }
    ) {
      edges {
        node { title, slug }
      }
    }
  }
`;
