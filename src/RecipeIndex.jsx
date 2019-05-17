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
        gridAutoRows: 'minmax(200px, auto)',
        gridColumnGap: '6px',
        gridRowGap: '3px'}}
      className='droppable'
      onDragOver={(e) => props.dragOver(e)}
      onDrop={(e) => props.dragDrop(e, props.dragObject)}>
      {recipes.map((recipe, idx) => (
        <RecipeCard
          deleteRecipe={props.deleteRecipe}
          recipe={recipe}
          key={idx} {...recipe}
          dragStart={props.dragStart}
          />
      ))}
    </div><br/><br/>
    <div>
      <RecipeForm addRecipe={props.addRecipe}/>
    </div>
    </React.Fragment>
  )
}

export default RecipeIndex
