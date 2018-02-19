/* eslint-disable react/prop-types */
import React from 'react';

import PostPreview from '../components/post/preview';

import random from '../lib/pickRandom';

const NotFoundPage = ({ data }) => {
  const { node: post } = random(data.allContentfulPost.edges);

  return (
    <div>
      <header>
        <h1>
          🤷🏼‍ There doesn&apos;t seem to be a page here…
        </h1>
        <p>But check out this cool article:</p>
      </header>
      <PostPreview excerpt={post.body.childMarkdownRemark.excerpt} timeToRead={post.body.childMarkdownRemark.timeToRead} {...post} />
    </div>
  );
};

export const query = graphql`
  query RandomPostQuery {
    allContentfulPost(limit: 10) {
      edges {
        node {
          title,
          date,
          slug,
          body {
            childMarkdownRemark { excerpt, timeToRead }
          }
        }
      }
    }
  }
`;

export default NotFoundPage;
