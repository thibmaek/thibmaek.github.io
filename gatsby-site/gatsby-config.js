module.exports = {
  siteMetadata: {
    siteUrl: `https://thibmaek.com`,
    title: `Thibault Maekelbergh`,
    description: `A nice blog about development, Raspberry Pi, plants and probably records`,
    author: `Thibault Maekelbergh`,
    keywords: [`thibault maekelbergh`, 'thibmaek', 'blog'],
    social: {
      github: `thibmaek`,
      twitter: `thibmaek`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // TODO: include later
    // `gatsby-plugin-no-sourcemaps`,
    // `gatsby-plugin-netlify`,
  ],
}
