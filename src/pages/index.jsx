import React from 'react';
import { object } from 'prop-types';

import RecentRepos from '../components/recent-repos';
import PostPreview from '../components/post/preview';

const IndexPage = ({ data }) => (
  <div>
    <RecentRepos />
    <section className='main-posts-list'>
      {data.allContentfulPost.edges.map(({ node: post }) => (
        <PostPreview
          key={post.id}
          excerpt={post.body.childMarkdownRemark.excerpt}
          timeToRead={post.body.childMarkdownRemark.timeToRead}
          {...post}
        />
      ))}
    </section>
  </div>
);

IndexPage.propTypes = {
  data: object.isRequired,
};

export const query = graphql`
  query AllPostsQuery {
    allContentfulPost(
      sort: { fields: [date], order: DESC },
    ) {
      edges {
        node {
          date
          id
          slug
          summary
          tags
          title
          body {
            childMarkdownRemark { excerpt, timeToRead }
          }
        }
      }
    }
  }
`;

export default IndexPage;
