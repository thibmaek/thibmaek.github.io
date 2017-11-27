import React from 'react';
import { object } from 'prop-types';

import Comments from '../components/comments/comments';

import './post.css';

import computeDateFormat from '../lib/computeDateFormat';

const PostPage = ({ data, location }) => {
  const { title, date, slug, body } = data.contentfulPost;
  const { childMarkdownRemark: post } = body;

  return (
    <section className='post-section-container'>
      <header className='post-header-container'>
        <h1 className='post-header-title'>{title}</h1>
        <time>
          {computeDateFormat(date)} — {post.timeToRead} min. read
        </time>
      </header>
      <article className='post-article-container' dangerouslySetInnerHTML={{ __html: post.html }} />
      <Comments title={title} slug={slug} location={location} />
    </section>
  );
};

PostPage.propTypes = {
  data: object.isRequired,
  location: object.isRequired,
};

export const query = graphql`
  query PostQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      date
      slug
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
