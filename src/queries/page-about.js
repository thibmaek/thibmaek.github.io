export default graphql`
  query AboutPageQuery {
    allContentfulPage(filter: { title: { eq: "About" } }) {
      edges {
        node {
          title
          body { childMarkdownRemark { html } }
        }
      }
    }
  }
`;
