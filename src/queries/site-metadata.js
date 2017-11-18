import graphql from 'graphql';

export default graphql`
  query SiteMetaDataQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
