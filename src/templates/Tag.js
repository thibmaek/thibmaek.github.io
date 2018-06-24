import React from "react";
import { shape, string, array } from 'prop-types';
import Link from "gatsby-link";

const Tag = ({ pathContext, data }) => {
  return (
    <div>
      <header>
        <h1>{pathContext.tag.replace(`-`, ` `)}</h1>
      </header>
      <section>
        <article>
          <ul>
            {data.allContentfulPost.edges.map(({ node: post }) => (
              <li key={post.id}>
                <Link to={`/post/${post.slug}`}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </section>
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
        node { title, slug, id }
      }
    }
  }
`;
