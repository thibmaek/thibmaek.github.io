const createPaginatedPages = require(`gatsby-paginate`);

module.exports = (posts, createPage) => createPaginatedPages({
  edges: posts,
  createPage: createPage,
  pageTemplate: `src/templates/index.js`,
  pageLength: 10, // This is optional and defaults to 10 if not used
  pathPrefix: ``, // This is optional and defaults to an empty string if not used
  context: {}, // This is optional and defaults to an empty object if not used
});
