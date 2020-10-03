const createPostOverview = require('./gatsby/createPostOverview');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.createPages = async ({ graphql, actions }) => {
  const contentfulPosts = await graphql(`
    {
      allContentfulPost(
        sort: { fields: [date], order: DESC }
        limit: 1000
      ) {
        nodes { id }
      }
    }
  `);

  if (contentfulPosts.errors) {
    console.log(contentfulPosts.errors);
    throw 'Failed getting posts';
  }

  createPostOverview(actions.createPage)(contentfulPosts.data.allContentfulPost.nodes)
};
