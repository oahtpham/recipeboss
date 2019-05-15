import React from 'react'
import styled from 'styled-components'

const RecipeCard = (props) => {
  return (
      <CardWrapper>
        <Image
          width="100%"
          height="50%"
          src={props.recipe.image}
          style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
        />
        <h3>{props.recipe.name}</h3>
        <p>{props.recipe.description}</p>
        <p>{props.recipe.instructions}</p>
        <button onClick={() => props.deleteRecipe(props.recipe)}> Delete Recipe </button>
      </CardWrapper>
  )
}

export default RecipeCard



const CardWrapper = styled.div`
  background-color: white;
  cursor: pointer;
  position: relative;
  border: orange solid;
  border-radius: 5px;
  font-size: 1vw;
`

export const Image = styled.img`
  height: ${p => p.height};
  width: ${p => p.width};
  object-fit: cover;
`
