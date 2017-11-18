export default graphql`
  query SiteMetaDataQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
