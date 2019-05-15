import React, {useState, useEffect} from 'react';
import RecipeIndex from './RecipeIndex'
import './App.css';
import NavBar from './NavBar';
import recipeData from './recipes'
import styled from 'styled-components'

function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    setRecipes(recipeData)
  }, [])

//// START OF CRUD EVENT HANDLERS ////
  const handleDeleteRecipe = (recipe) => {
    const newRecipes = recipes.filter(recipeItem => recipe.name !== recipeItem.name)
    setRecipes(newRecipes)
  }

  const handleNewRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe])
  }
//// END OF CRUD EVENT HANDLERS ////

  return (
    <div className="App">
      <NavBar />
      <RecipeIndex
        recipes={recipes}
        addRecipe={handleNewRecipe}
        deleteRecipe={handleDeleteRecipe}/>
    </div>
  );
}

export default App;
