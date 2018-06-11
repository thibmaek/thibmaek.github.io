/* eslint-disable camelcase */
module.exports = {
  resolve: `gatsby-plugin-feed`,
  options: {
    query: `
      {
        site {
          siteMetadata {
            title, description, siteUrl, site_url: siteUrl
          }
        }
      }
    `,
    feeds: [
      {
        serialize: ({ query: { site, allContentfulPost } }) => {
          return allContentfulPost.edges.map(({ node }) => {
            return Object.assign({}, {
              custom_elements: [{ "content:encoded": node.body.childMarkdownRemark.html }],
              description: node.summary || node.body.childMarkdownRemark.excerpt,
              guid: node.id,
              pubDate: node.date,
              link: `${site.siteMetadata.siteUrl}${node.slug}`,
              title: node.title,
            });
          });
        },
        query: `
          {
            allContentfulPost(
              limit: 1000,
              sort: { fields: [date], order: DESC },
            ) {
              edges {
                node {
                  date
                  id
                  slug
                  summary
                  title
                  body {
                    childMarkdownRemark { excerpt, html }
                  }
                }
              }
            }
          }
        `,
        output: `/feed.xml`,
      },
    ],
  },
};
