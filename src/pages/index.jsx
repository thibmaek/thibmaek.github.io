import React from 'react';
import { object } from 'prop-types';

import RecentRepos from '../components/recent-repos';
import PostPreview from '../components/post/preview';

const IndexPage = ({ data }) => (
  <div>
    <RecentRepos />
    {data.allContentfulPost.edges.map(({ node: post }) => (
      <PostPreview key={post.id} {...post} />
    ))}
  </div>
);

IndexPage.propTypes = {
  data: object.isRequired,
};

export const query = graphql`
  query AllPostsQuery {
    allContentfulPost {
      edges {
        node {
          title
          id
        }
      }
    }
  }
`;

export default IndexPage;
