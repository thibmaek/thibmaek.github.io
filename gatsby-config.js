require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    author: `Thibault Maekelbergh`,
    keywords: `thibault maekelbergh, thibmaek, blog`,
    title: `A nice blog about development, Raspberry Pi, plants and probably records`,
    social: {
      github: `thibmaek`,
      twitter: `thibmaek`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: process.env.CONTENTFUL_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACEID,
      },
    },
  ],
};
