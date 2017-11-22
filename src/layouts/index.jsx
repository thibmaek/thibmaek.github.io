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
      <Helmet siteMetadata={siteMetadata} />
      <Header title={siteMetadata.author}>
        <Nav links={links} />
      </Header>
      <main className='main-content'>
        {children()}
      </main>
      <Footer
        author={siteMetadata.author}
        social={siteMetadata.social}
        oneliners={data.contentfulList.list}
      />
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
        author,
        title,
        keywords,
        social { github, twitter },
      }
    }

    contentfulList(slug: { eq: "footer-oneliners" }) { list }

    allContentfulPage(
      sort: { fields: [slug], order: ASC },
    ) {
      edges {
        node { title, slug }
      }
    }

    allContentfulList(
      filter: { slug: { ne: "footer-oneliners" } },
      sort: { fields: [slug], order: ASC },
    ) {
      edges {
        node { title, slug }
      }
    }
  }
`;

export default IndexLayout;
