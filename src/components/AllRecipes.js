import React from 'react'


import TagsList from './TagsList'
import RecipesList from './RecipesList'


const AllRecipes = () => {
  return (
    <div>
      <h4>all recipes</h4>
      <RecipesList/>
      <TagsList/>
    </div>
  )
}

export default AllRecipes
