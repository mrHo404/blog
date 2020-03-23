module.exports = {
  siteMetadata: {
    title: `Bavarian-MultiRotor`,
    description: `Bleibe auf dem Laufenden was FPV rennen in Deutschland angeht`,
    author: `@Bavarian-Multirotor`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: `${__dirname}/src/assets/logos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bavarian-multirotor-homepage`,
        short_name: `bmr-hp`,
        start_url: `/`,
        background_color: `#00204a`,
        theme_color: `#00204a`,
        display: `minimal-ui`,
        icon: `src/assets/logos/BMR_Logo_Icon_Colour4x.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
