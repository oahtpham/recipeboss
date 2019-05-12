import React, {useState, useEffect} from 'react';
import RecipeIndex from './RecipeIndex'
import './App.css';
import NavBar from './NavBar';
import recipeData from './recipes'

function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    setRecipes(recipeData)
  }, [])

  return (
    <div className="App">
      <NavBar />
      <RecipeIndex recipes={recipes} />
    </div>
  );
}

export default App;
