import React, {useState} from 'react'
import RecipeCard from './RecipeCard'
import RecipeForm from './RecipeForm'

const RecipeIndex = ({recipes, ...props}) => {

  return (
    <React.Fragment>
    <div
      style={{
        marginTop: '65px',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridAutoRows: 'minmax(220px, auto)',
        gridColumnGap: '6px',
        gridRowGap: '3px'}}>
      {recipes.map((recipe, idx) => (
        <RecipeCard
          deleteRecipe={props.deleteRecipe}
          recipe={recipe}
          key={idx} {...recipe} />
      ))}
    </div><br/><br/>
    <div>
      <RecipeForm addRecipe={props.addRecipe}/>
    </div>
    </React.Fragment>
  )
}

export default RecipeIndex
