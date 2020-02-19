module.exports = {
  siteMetadata: {
    title: `Bavarian-MultiRotor`,
    description: `Bleibe auf dem Laufenden was FPV rennen in Deutschland angeht`,
    author: `@Bavarain-Multirotor`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00204a`,
        theme_color: `#00204a`,
        display: `minimal-ui`,
        icon: `src/images/BMR_Logo_Icon_Colour1x.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
