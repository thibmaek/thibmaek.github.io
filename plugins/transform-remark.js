module.exports = {
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      `gatsby-remark-prismjs`,
      `gatsby-remark-emoji`,
      {
        resolve: `gatsby-remark-external-links`,
        options: {
          target: `_blank`,
          rel: `noopener`,
        },
      },
    ],
  },
};
