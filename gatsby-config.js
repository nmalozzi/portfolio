module.exports = {
  siteMetadata: {
    title: `Front End Leadership, Development, & Design`,
    description: `A Portfolio Site for Front End Manager, Developer, & Designer, Nick Malozzi.`,
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
        name: `nickmalozzi.com | Front End Leadership, Development, & Design`,
        short_name: `nickmalozzi.com`,
        description: `A Portfolio Site for Front End Manager, Developer, & Designer, Nick Malozzi.`,
        lang: `en`,
        start_url: "/",
        background_color: "#666",
        theme_color: "#666",
        display: "standalone",
        icon: "src/images/favicon.svg",
      },
    },
  ],
}