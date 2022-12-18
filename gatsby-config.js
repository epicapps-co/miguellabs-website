module.exports = {
  siteMetadata: {
    title: `MiguelLabs. Creative innovation.`,
    description: `We create digital products & services. We are here to help you build the future.`,
    author: `@miguellabs`,
    url: "https://www.miguellabs.com",
    image: "/social-hero.png",
    email: "hello@miguellabs.com",
    phone: "+1 (917) 930 3135",
    streetAddress: "25 Broadway 9th floor",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10004",
    name: "MiguelLabs",
    legalName: "MiguelLabs Inc",
    linkedIn: "http://linkedin.com/company/miguelalabs",
    facebook: "https://www.facebook.com/miguelalabs/",
    twitter: "https://twitter.com/miguellabs",
    instagram: "https://www.instagram.com/miguellabs/",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MiguelLabs`,
        short_name: `ML`,
        start_url: `/`,
        background_color: `#FAFAFA`,
        theme_color: `#DD2222`,
        display: `minimal-ui`,
        icon: `src/assets/images/mmplus-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`,
      },
    },
    // TODO: setup a cookie solution to enable analytics
    // {
    //   resolve: `gatsby-plugin-gtag`,
    //   options: {
    //     trackingId: `UA-153078710-1`,
    //     head: false,
    //     anonymize: true,
    //   },
    // },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
