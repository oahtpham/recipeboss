import React from 'react'
import RecipeCard from './RecipeCard'
import RecipeForm from './RecipeForm'

const RecipeIndex = ({recipes, ...props}) => {
  return (
    <div
      style={{
        marginTop: '65px',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridAutoRows: 'minmax(200px, auto)',
        gridColumnGap: '6px',
        gridRowGap: '1px'}}>
      {recipes.map((recipe, idx) => (
        <RecipeCard
          deleteRecipe={props.deleteRecipe}
          recipe={recipe}
          key={idx} {...recipe} />
      ))}
      <RecipeForm addRecipe={props.addRecipe}/>
    </div>
  )
}

export default RecipeIndex
