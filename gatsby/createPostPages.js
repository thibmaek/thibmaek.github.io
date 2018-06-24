const path = require(`path`);

module.exports = (posts, createPage) => {
  posts.forEach(({ node: { id, slug } }) => {
    createPage({
      component: path.resolve(`./src/templates/Post.js`),
      context: {
        id, slug,
      },
      path: `/post/${slug}/`,
    });
  });
};
