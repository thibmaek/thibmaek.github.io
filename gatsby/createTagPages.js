const path = require(`path`);

const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

module.exports = (posts, createPage) => {
  const tags = [
    ...new Set(
      flatten(
        posts.map(({ node }) => (node.tags && node.tags.length > 0) ? node.tags : undefined)
      )
    ),
  ].filter(Boolean);

  tags.forEach(tag => {
    createPage({
      component: path.resolve(`./src/templates/Tag.js`), // resolves from project root
      context: { tag },
      path: `/tag/${tag}/`,
    });
  });

  return tags;
};
