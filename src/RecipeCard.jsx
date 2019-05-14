import React from 'react'
import styled from 'styled-components'

const RecipeCard = recipe => {
  return (
      <CardWrapper>
        <Image
          width="100%"
          height="50%"
          src={recipe.image}
          style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
        />
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
        <p>{recipe.instructions}</p>
        <button> Delete Recipe </button>
      </CardWrapper>
  )
}

export default RecipeCard



const CardWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 150%;
  cursor: pointer;
  position: relative;
  border: orange solid 3px;
  border-radius: 5px;
  font-size: 15px;
`

export const Image = styled.img`
  height: ${p => p.height};
  width: ${p => p.width};
  object-fit: cover;
`

const h3 = styled.h3`
  font-size: 5vw;
`
