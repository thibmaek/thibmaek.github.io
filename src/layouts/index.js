import React from 'react';
import { func, object } from 'prop-types';

import { Helmet } from '../components/helmet/';
import { Header } from '../components/header/';
import { Navbar } from '../components/nav/';
import { Footer } from '../components/footer/';
import { ThemeToggle } from '../components/toggle/';

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

  constructor(props) {
    super(props);
    const theme = window.localStorage.getItem(`theme`) || `light`;
    this.state = { theme };
  }

  get isDarkTheme() {
    return window.localStorage.getItem(`theme`) === `dark`;
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

  handleSetTheme = evt => {
    const mode = evt.target.checked ? `dark` : `light`;
    this.setState({
      theme: mode,
    }, window.localStorage.setItem(`theme`, mode));
  }

  render() {
    const { siteMetadata } = this.props.data.site;
    return (
      <div className={`main-container theme-${this.state.theme}`}>
        <Helmet siteMetadata={siteMetadata} />
        <Header title={siteMetadata.author}>
          <Navbar links={this.links} />
        </Header>
        <ThemeToggle
          className='toggle-theme'
          defaultChecked={this.isDarkTheme}
          onToggle={this.handleSetTheme}
          value={this.state.theme}
        />
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
