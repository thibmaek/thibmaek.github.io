const path = require(`path`);

const postTemplate = path.resolve(`./src/templates/post.jsx`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise(async (resolve, reject) => {
    try {
      const post = await graphql(`
        {
          allContentfulPost(limit: 1000) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `);

      if (post.errors) reject(post.errors);

      post.data.allContentfulPost.edges.forEach(edge => {
        createPage({
          component: postTemplate,
          context: {
            id: edge.node.id,
            slug: edge.node.slug,
          },
          path: `/post/${edge.node.slug}/`,
        });
      });

      resolve();
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
};
