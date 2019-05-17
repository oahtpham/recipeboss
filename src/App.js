import React, {useState, useEffect} from 'react';
import RecipeIndex from './RecipeIndex'
import './App.css';
import NavBar from './NavBar';
import recipeData from './recipes'
import styled from 'styled-components'

function App() {
  const [recipes, setRecipes] = useState([])
  const [dragObject, setDragObject] = useState(null)

  useEffect(() => {
    setRecipes(recipeData)
  }, [])

//// START OF CRUD EVENT HANDLERS ////
  const handleDeleteRecipe = (recipe) => {
    const newRecipes = recipes.filter(recipeItem => recipe.name !== recipeItem.name)
    setRecipes(newRecipes)
  }

  const handleNewRecipe = (newRecipe) => {
    setRecipes([...recipes, {...newRecipe, id: recipes.length+1}])
    console.log(recipes)
  }
//// END OF CRUD EVENT HANDLERS ////

//// START OF DRAG AND DROP////
  const handleDragStart = (recipe) => {
    setDragObject(recipe)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDragDrop = (e, dragObject) => {
    const dragObjectIndex = recipes.indexOf(dragObject)
    recipes.splice(dragObjectIndex, 1)
    setRecipes([...recipes, dragObject])
    //using e.target gives us mixed results so we can't use that to find the id of the recipe the dragObject was placed on top to switch it's order in the array.... for now, the dragObject item will be placed at the end of the array.
  }

//// END OF DRAG AND DROP////

  return (
    <div className="App">
      <NavBar />
      <RecipeIndex
        recipes={recipes}
        addRecipe={handleNewRecipe}
        deleteRecipe={handleDeleteRecipe}
        dragStart={handleDragStart}
        dragOver={handleDragOver}
        dragObject={dragObject}
        dragDrop={handleDragDrop}/>
    </div>
  );
}

export default App;
