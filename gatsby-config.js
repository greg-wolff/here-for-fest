module.exports = {
  siteMetadata: {
    title: `Here for LA`,
    description: `On December 3rd at 4:30 PM we are inviting you to participate in being here for Los Angeles.`,
    author: `<HERE`,
    siteUrl: `http://herefor.earth/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-breakpoints`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Here for LA`,
        short_name: `hereforla`,
        start_url: `/`,
        background_color: `#000000`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/svg/favicon.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
