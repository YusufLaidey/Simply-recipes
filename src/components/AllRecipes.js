import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import TagsList from './TagsList'
import RecipesList from './RecipesList'

const query = graphql`
 {
  allContentfulRecipe(sort: { fields: title, order: ASC }) {
    nodes {
      id
      title
      cookTime
      prepTime
      content {
        tags
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
}
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  // const {allContentfulRecipe:{nodes:recipes}} = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  console.log(recipes)
  return (
    <section className='recipes-container'>
      <h4>all recipes</h4>
      <RecipesList recipes={recipes} />
      <TagsList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
