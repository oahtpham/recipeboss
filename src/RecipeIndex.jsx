import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeIndex = ({recipes, ...props}) => {
  return (
    <div style={{
        marginTop: '5%',
        display: 'grid',
        gridTemplateColumns: '25% 25% 25% 25%',
        gridTemplateRows: '45% 45%'}}>
      {recipes.map((recipe, idx) => (
        <RecipeCard key={idx} {...recipe} />
      ))}
    </div>
  )
}

export default RecipeIndex
