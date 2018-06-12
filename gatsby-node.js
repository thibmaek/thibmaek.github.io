const createTagPages = require(`./gatsby/createTagPages`);
const createPostPages = require(`./gatsby/createPostPages`);
const createPaginatedPages = require(`./gatsby/createPaginatedPages`);

exports.createPages = ({ graphql, boundActionCreators: { createPage } }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { errors, data } = await graphql(`
        {
          allContentfulPost(
            limit: 1000,
            sort: { fields: [date], order: DESC }
          ) {
            edges {
              node {
                id
                slug
                date
                id
                slug
                summary
                tags
                title
                body {
                  childMarkdownRemark {
                    excerpt
                    timeToRead
                  }
                }
              }
            }
          }
        }
      `);

      if (errors) {
        return reject(errors);
      } else {
        const posts = data.allContentfulPost.edges;

        createPaginatedPages(posts, createPage);
        createPostPages(posts, createPage);
        createTagPages(posts, createPage);

        return resolve(posts);
      }
    } catch (e) {
      console.error(e);
      return reject(e);
    }
  });
};
