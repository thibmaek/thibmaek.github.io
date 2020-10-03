const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

module.exports = function(createPageFn) {
  return function(items) {
    paginate({
      createPage: createPageFn,
      items,
      itemsPerPage: 10,
      pathPrefix: '/',
      component: path.resolve('./src/templates/PostOverview.tsx'),
    });
  }
}
