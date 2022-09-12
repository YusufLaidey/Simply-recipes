/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
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
  `gatsby-transformer-sharp`,],
}
