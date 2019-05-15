import React, {useState} from 'react'
import styled from 'styled-components'
import Unsplash from 'unsplash-js'

const UnsplashSearch = require('unsplash-js').default;

const unsplashRequest = new UnsplashSearch({
  applicationId: `${process.env.REACT_APP_UNSPLASH_API_KEY}`,
  secret: `${process.env.REACT_APP_UNSPLASH_SECRET_KEY}`
});

const RecipeForm = (props) => {
  const initialFormState = {name: "", description: "", instructions: "", image: "" }
  const [newRecipe, setNewRecipe] = useState(initialFormState)
  const [searchResults, setSearchResults] = useState(null)
  const [clickedImage, setClickedImage] = useState(null)
  const [showButton, setShowButton] = useState(false)

  const handleShowForm = () => {
    setShowButton(!showButton)
  }

  const handleInputChange = event => {
    window.scrollTo(500,500)
    const { name, value } = event.target
    setNewRecipe({...newRecipe, [name]: value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (!newRecipe.name || !newRecipe.description || ! newRecipe.instructions) return window.alert('Fill out all fields!');
    props.addRecipe(newRecipe);
    setNewRecipe(initialFormState)
    setClickedImage(null)
    setSearchResults(null)
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSubmit(event)
    }
  }

  //function sends a get request to unsplash API for photos from search keyword and results are limited to 10 photos
  const handleSearch = (event) => {
    unsplashRequest.search.photos(event.target.value, 1)
    .then(results => results.json())
    .then(results => {
      setSearchResults(results)
    })
  }

  const searchResultsMap = (searchResults) => {
    if (!searchResults) return;
    return searchResults.results.map(result => {
      if (result === clickedImage) {
        return <img
          key={result.id}
          src={result.urls.small}
          height='130px'
          width='130px'
          style={{border: 'orange solid'}}/>
      } else {
      return <img
        key={result.id}
        src={result.urls.small}
        height='130px'
        width='130px'
        onClick={() => chosenImage(result)}/>
      }
    })
  }

  const chosenImage = (result) => {
    setClickedImage(result)
    setNewRecipe({...newRecipe, image: result.urls.small})
  }

  const button = () => {
    return (
      <button
      onClick={handleShowForm}
      style={{
        color: 'white',
        fontSize: '16px',
        backgroundColor: 'orange',
        padding: '15px 32px',
        textAlign: 'center'}}> {showButton ? 'Hide Form' : 'Add a New Recipe' } </button>
    )
  }

  const form = () => {
    window.scrollTo(500, 500)
    return (
      <div>
      {button()}
      <br/><br/><br/>
        <form
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}>
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
          <label>Search Photos on Unsplash:</label><br/>
            <input
              name="image"
              type='text'
              value={newRecipe.image}
              onChange={handleSearch}/><br/>
              {searchResultsMap(searchResults)}<br/>
          <input
            type="submit"
            value="Add"
          /><br/><br/><br/><br/>
        </form>
        </div>
    )
  }

  return (
    <React.Fragment>
      {showButton ? form() : button()}
    </React.Fragment>
  )
}

export default RecipeForm
