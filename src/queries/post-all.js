export default graphql`
  query AllPostsQuery {
    allContentfulPost {
      edges {
        node {
          title
          id
        }
      }
    }
  }
`;
