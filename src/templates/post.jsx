import React from 'react';
import { object } from 'prop-types';

import './post.css';

import computeDateFormat from '../lib/computeDateFormat';

const PostPage = ({ data }) => {
  const { title, date, body } = data.contentfulPost;
  const { childMarkdownRemark: post } = body;

  return (
    <section>
      <header>
        <h1>{title}</h1>
        <div className='post-header-timemeta'>
          <time>{computeDateFormat(date)}</time> — <span>{post.timeToRead} min. read</span>
        </div>
      </header>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </section>
  );
};

PostPage.propTypes = {
  data: object.isRequired,
};

export const query = graphql`
  query PostQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      date
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`;

export default PostPage;
