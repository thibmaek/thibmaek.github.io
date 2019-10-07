import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { Card } from '../components/level2';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Card title="Blog post!" bordered={false}></Card>
  </Layout>
);

export default IndexPage;
