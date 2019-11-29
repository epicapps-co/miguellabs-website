module.exports = {
  siteMetadata: {
    title: `MM+ Studio. Creative innovation company.`,
    description: `Creative innovation company. We create digital products & services. We are here to help you build the future.`,
    author: `@mm-plus`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MM+ Studio`,
        short_name: `MM+`,
        start_url: `/`,
        background_color: `#FAFAFA`,
        theme_color: `#DD2222`,
        display: `minimal-ui`,
        icon: `src/static/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cover`,
        path: `${__dirname}/src/static/cover`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/static/content`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
