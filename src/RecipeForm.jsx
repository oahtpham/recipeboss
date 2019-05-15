import React, {useState} from 'react'
import styled from 'styled-components'

const RecipeForm = (props) => {
  const initialFormState = {name: "", description: "", instructions: "" }
  const [newRecipe, setNewRecipe] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target
    setNewRecipe({...newRecipe, [name]: value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (!newRecipe.name || !newRecipe.description || ! newRecipe.instructions) return window.alert('Fill out all fields!');
    props.addRecipe(newRecipe);
    setNewRecipe(initialFormState)
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSubmit(event)
    }
  }

  return (
      <form
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}>
        <h4> Add New Recipe </h4>
        <label>Recipe Name:</label><br/>
          <input
            name="name"
            type='text'
            value={newRecipe.name}/><br/><br/>
        <label>Description:</label><br/>
          <textarea
            name="description"
            rows="4"
            cols= "35"
            value={newRecipe.description}>
          </textarea><br/><br/>
        <label>Instructions:</label><br/>
          <textarea
            name="instructions"
            rows="4"
            cols= "35"
            value={newRecipe.instructions}>
          </textarea><br/><br/>
        <input
          type="submit"
          value="Add"
        />
      </form>
  )
}

export default RecipeForm
