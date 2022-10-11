/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here   */
  siteMetadata:{
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site',
    author: '@YusufLaidey',
    person:{ name: 'Yusuf', age:'32'},
    simpleData:['item 1', 'item 2'],
    complexData: [
      {name: 'Laidey', age: '29'},
      {name: 'Omo Ope', age: '28'},
    ],
  },
  plugins: [`gatsby-plugin-styled-components`,
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images`,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `y4cwectd1hqq`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_API_KEY,
    },
  },
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-plugin-webfonts`,
    options: {
      fonts: {
        google: [
          {
            family: "Montserrat",
            variants: ["400"],
          },
          {
            family: "Inconsolata",
            variants: ["400", "500", "600", "700"],
          },
        ],
      },
    },
  },
],
}
