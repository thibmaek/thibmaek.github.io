import React from 'react';
import { func, object } from 'prop-types';

import Helmet from '../components/helmet/';
import Header from '../components/header/';
import Nav from '../components/nav/';
import Footer from '../components/footer/';

import sortByProperty from '../lib/sortByProperty';

import 'normalize.css';
import '../styles/index.css';
import '../styles/mq.css';

const IndexLayout = ({ children, data }) => {
  const { siteMetadata } = data.site;

  const links = sortByProperty([
    ...data.allContentfulPage.edges.map(({ node }) => node),
    ...data.allContentfulList.edges.map(({ node }) => node),
  ], `slug`);

  return (
    <div className='main-container'>
      <Helmet
        title={`${siteMetadata.author} | ${siteMetadata.title}`}
        meta={[
          { name: `description`, content: siteMetadata.title },
          { name: `keywords`, content: `` },
          { name: `author`, content: siteMetadata.author },
          // TODO: Twitter & OpenGraph
        ]}
        link={[
          { rel: `icon`, type: `image/png`, href: favicon16, sizes: `16x16` },
          { rel: `icon`, type: `image/png`, href: favicon32, sizes: `32x32` },
          { rel: `icon`, type: `image/png`, href: favicon96, sizes: `96x96` },
        ]}
      />
      <Header title={siteMetadata.author}>
        <Nav links={links} />
      </Header>
      <main className='main-content'>
        {children()}
      </main>
      <Footer author={siteMetadata.author} social={siteMetadata.social} />
    </div>
  );
};

IndexLayout.propTypes = {
  children: func.isRequired,
  data: object.isRequired,
};

export const query = graphql`
  query SiteMetadataQuery {
    site {
      siteMetadata {
        author
        title
        social {
          github
          twitter
        }
      }
    }

    allContentfulPage(sort: {
      fields: [slug],
      order: ASC
    }) {
      edges {
        node { title, slug }
      }
    }

    allContentfulList(sort: {
      fields: [slug],
      order: ASC
    }) {
      edges {
        node { title, slug }
      }
    }
  }
`;

export default IndexLayout;
