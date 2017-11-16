require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: `A nice blog about development, Raspberry Pi, plants and probably records`,
    author: `Thibault Maekelbergh`,
    social: {
      github: `thibmaek`,
      twitter: `thibmaek`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: process.env.CONTENTFUL_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACEID,
      },
    },
  ],
};
