module.exports = {
  siteMetadata: {
    title: `Front End Development & Design`,
    description: `A Portfolio Site for Front End Developer & Designer, Nick Malozzi.`,
    author: `Nick Malozzi`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nickmalozzi.com | Front End Development & Design`,
        short_name: `nickmalozzi.com`,
        description: `A Portfolio Site for Front End Developer & Designer, Nick Malozzi.`,
        lang: `en`,
        start_url: "/",
        background_color: "#666666",
        theme_color: "#666666",
        display: "standalone",
        icon: "src/images/favicon.svg",
      },
    },
  ],
}