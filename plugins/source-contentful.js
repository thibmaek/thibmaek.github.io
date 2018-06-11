require(`dotenv`).config();

module.exports = {
  resolve: `gatsby-source-contentful`,
  options: {
    accessToken: process.env.CONTENTFUL_TOKEN,
    spaceId: process.env.CONTENTFUL_SPACEID,
  },
};
