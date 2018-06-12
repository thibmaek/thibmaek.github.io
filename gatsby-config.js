const { canonicalUrls, feed, sourceContentful, transformRemark } = require(`./plugins`);

module.exports = {
  siteMetadata: {
    author: `Thibault Maekelbergh`,
    keywords: `thibault maekelbergh, thibmaek, blog`,
    title: `Thibault Maekelbergh`,
    description: `A nice blog about development, Raspberry Pi, plants and probably records`,
    siteUrl: `https://blog.thibmaekelbergh.be`,
    social: {
      github: `thibmaek`,
      twitter: `thibmaek`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-no-sourcemaps`,
    sourceContentful,
    transformRemark,
    feed,
    canonicalUrls,
    `gatsby-plugin-netlify`,
  ],
};
