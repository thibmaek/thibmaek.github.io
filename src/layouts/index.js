import React from 'react';
import { func, object } from 'prop-types';

import { Helmet } from '../components/helmet/';
import { Header } from '../components/header/';
import { Navbar } from '../components/nav/';
import { Footer } from '../components/footer/';

import sortByProperty from '../lib/sortByProperty';

import 'normalize.css';
import '../styles/index.css';
// TODO: Replace with gatsby-browser API
import 'prismjs/themes/prism.css';

class IndexLayout extends React.Component {
  static propTypes = {
    children: func.isRequired,
    data: object.isRequired,
  }

  get links() {
    const { data } = this.props;
    return sortByProperty([
      ...data.allContentfulPage.edges.map(({ node }) => node),
      ...data.allContentfulList.edges.map(({ node }) => node),
      {
        slug: `spotify`,
        title: `🔊 Spotify`,
      },
    ], `slug`);
  }

  render() {
    const { siteMetadata } = this.props.data.site;
    return (
      <div className={`main-container theme-light`}>
        <Helmet siteMetadata={siteMetadata} />
        <Header title={siteMetadata.author}>
          <Navbar links={this.links} />
        </Header>
        <main className='main-content'>
          {this.props.children()}
        </main>
        <Footer
          author={siteMetadata.author}
          oneliners={this.props.data.contentfulList.list}
          social={siteMetadata.social}
        />
      </div>
    );
  }
}

export const query = graphql`
  query SiteMetadataQuery {
    site {
      siteMetadata {
        author,
        description,
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
