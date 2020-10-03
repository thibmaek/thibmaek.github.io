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
              guid: node.id,
              date: node.date,
              title: node.title,
              description: node.summary || node.body.childMarkdownRemark.excerpt,
              url: `${site.siteMetadata.siteUrl}${node.slug}`,
              custom_elements: [{
                "content:encoded": node.body.childMarkdownRemark.html,
              }],
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
        title: `Thibault Maekelbergh`,
      },
    ],
  },
};
