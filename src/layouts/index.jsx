import React from 'react';
import { func, object } from 'prop-types';
import Helmet from 'react-helmet';

import links from '../constants/links';

import Header from '../components/header/';
import Nav from '../components/nav/';
import Footer from '../components/footer/';

import 'normalize.css';
import '../styles/index.css';

const IndexLayout = ({ children, data }) => (
  <div className='main-container'>
    <Helmet
      // title={data.site.siteMetadata.title}
      meta={[
        { name: `description`, content: `Sample` },
        { name: `keywords`, content: `sample, something` },
      ]}
    />
    <Header>
      <Nav links={links} />
    </Header>
    <main className='main-content'>
      {children()}
    </main>
    <Footer />
  </div>
);

IndexLayout.propTypes = {
  children: func.isRequired,
  data: object.isRequired,
};

export const query = graphql`
  query SiteMetaDataQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexLayout;
