export default graphql`
  query PublicationsPageQuery {
    allContentfulPage(filter: { title: { eq: "Publications" } }) {
      edges {
        node {
          title
          body { childMarkdownRemark { html } }
        }
      }
    }
  }
`;
