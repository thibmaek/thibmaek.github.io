import React from 'react';
import { object } from 'prop-types';

import { Comments } from '../components/comments/';
import { Tags } from '../components/post/';

import { PostHelmet } from '../components/helmet/';

import './post.css';

import computeDateFormat from '../lib/computeDateFormat';
import getFirstImageFromHTML from '../lib/getFirstImageFromHTML';

const PostPage = ({ data, location }) => {
  const { title, date, slug, body, tags } = data.contentfulPost;
  const { childMarkdownRemark: post } = body;
  const ogImageSrc = getFirstImageFromHTML(post.html);

  return (
    <section className='post-section-container'>
      <PostHelmet
        meta={{ name: `og:image`, content: ogImageSrc }}
        title={title}
      />
      <header className='post-header-container'>
        <h1 className='post-header-title'>{title}</h1>
        <time>
          {computeDateFormat(date)} — {post.timeToRead} min. read
        </time>
      </header>
      <article className='post-article-container' dangerouslySetInnerHTML={{ __html: post.html }} />
      {tags ? <Tags tags={tags} /> : null}
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
      tags
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
