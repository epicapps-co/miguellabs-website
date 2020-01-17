module.exports = {
  siteMetadata: {
    title: `MM+ Studio. Creative innovation.`,
    description: `We create digital products & services. We are here to help you build the future.`,
    author: `@mmplusstudio`,
    url: "https://mmplus.studio",
    image: "/social-hero.png",
    email: "hello@mmplus.studio",
    phone: "+1 (917) 930 3135",
    streetAddress: "25 Broadway 9th floor",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10004",
    name: "MM+",
    legalName: "MMPlus Inc",
    linkedIn: "http://linkedin.com/company/mmplus",
    facebook: "https://www.facebook.com/mmplusstudio/",
    twitter: "https://twitter.com/mmplusstudio",
    instagram: "https://www.instagram.com/mmplusstudio/",
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
    `gatsby-plugin-react-helmet-async`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
