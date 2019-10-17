import React from 'react';
import { graphql, Link } from 'gatsby';
import { Row, Col } from 'antd';

import { ContentfulPostConnection } from '../graphqlTypes';
import Layout from '../components/Layout';
import { Post } from '../components/level2';

interface Props {
  data: {
    allContentfulPost: ContentfulPostConnection;
  };
}

const PostOverview = ({ data }: Props) => {
  const { nodes, totalCount } = data.allContentfulPost;

  return (
    <Layout>
      <h1>{totalCount} articles and counting!</h1>
      <Row gutter={16}>
        {nodes.map(post => (
          <Col key={post.id} span={8}>
            <Link to={`/post/${post.slug}`}>
              <Post title={post.title}>{post.summary}</Post>
            </Link>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export const postOverviewQuery = graphql`
  query postOverviewQuery($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        title
        id
        summary
        slug
      }
      totalCount
    }
  }
`;

export default PostOverview;
