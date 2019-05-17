import React, {useState} from 'react'
import Unsplash from 'unsplash-js'


const RecipeForm = (props) => {
  const initialFormState = {id: null, name: "", description: "", instructions: "", image: "" }
  const [newRecipe, setNewRecipe] = useState(initialFormState)
  const [searchResults, setSearchResults] = useState(null)
  const [clickedImage, setClickedImage] = useState(null)
  const [showButton, setShowButton] = useState(false)

//// START OF UNSPLASH API DATA ////
  const UnsplashSearch = require('unsplash-js').default;

  const unsplashRequest = new UnsplashSearch({
    applicationId: `${process.env.REACT_APP_UNSPLASH_API_KEY}`,
    secret: `${process.env.REACT_APP_UNSPLASH_SECRET_KEY}`
  });
//// END OF UNSPLASH API DATA ////

//// START OF EVENT HANDLERS FOR FORM DATA ////
  const handleInputChange = event => {
    window.scrollTo(500,500)
    const { name, value } = event.target
    setNewRecipe({...newRecipe, [name]: value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    //if statement below will throw an error if user has any empty fields or has not selected an image
    if (!newRecipe.name || !newRecipe.description || ! newRecipe.instructions || !newRecipe.image) return window.alert('Please ensure all information is complete!');
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
//// END OF EVENT HANDLERS FOR FORM DATA ////

//// START OF SEARCH FUNCTIONALITIES ////
  const handleSearch = (event) => {
    unsplashRequest.search.photos(event.target.value, 1) //get request that hits Unsplash API data
    .then(results => results.json())
    .then(results => {
      setSearchResults(results)
    })
  }

  const searchResultsMap = (searchResults) => {

    if (!searchResults) return; //searchResults is initialized as null, so we will return nothing on page until user searches
    if (searchResults.results.length === 0) { //if keyword has 0 results, this notifies user that there are no results from their search
      return (
          <h3>No photos match your search</h3>
      )
    } else { //the map below renders an image tag of every photo search result. If a photo is clicked, an orange border surrounds the photo user has chosen
      return searchResults.results.map(result => {
        if (result === clickedImage) {
          return (
            <img
              key={result.id}
              src={result.urls.small}
              height='130px'
              width='130px'
              style={{border: 'orange solid'}}/>
          )
        } else {
          return (
            <img
              key={result.id}
              src={result.urls.small}
              height='130px'
              width='130px'
              onClick={() => chosenImage(result)}/>
          )
        }
      })
    }
  }

  const chosenImage = (result) => {
    setClickedImage(result)
    setNewRecipe({...newRecipe, image: result.urls.small
  })

  }
//// END OF SEARCH FUNCTIONALITIES ////


//// START OF ITEMS THAT RENDER ON PAGE ////
  const handleShowForm = () => {
    setShowButton(!showButton)
  }

  const button = () => {
    return (
      <button
        onClick={handleShowForm}
        style={{
          color: 'white',
          fontSize: '16px',
          backgroundColor: '#ff9248',
          padding: '15px 32px',
          textAlign: 'center'}}>
        Add a New Recipe
      </button>
    )
  }

  const form = () => {
    window.scrollTo(500, 500)
    return (
      <div
        style={{
          position: 'fixed',
          zIndex: '1',
          width: '50%',
          height: '80%',
          left: '25%',
          top: '12%',
          overflow: 'auto',
          backgroundColor: '#ff9248'

        }}>
      <br/><br/><br/>
        <button
          onClick={handleShowForm}
          style={{
            marginLeft: '550px',
            color: 'white',
            backgroundColor: '#ff9248'
          }}>
        X
        </button>
        <form
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}>
          <label>Recipe Name:</label><br/>
            <textarea
              name="name"
              rows="1"
              cols="50"
              value={newRecipe.name}></textarea><br/><br/>
          <label>Description:</label><br/>
            <textarea
              name="description"
              rows="4"
              cols= "50"
              value={newRecipe.description}>
            </textarea><br/><br/>
          <label>Instructions:</label><br/>
            <textarea
              name="instructions"
              rows="4"
              cols= "50"
              value={newRecipe.instructions}>
            </textarea><br/><br/>
          <label>Search Photos on Unsplash:</label><br/>
            <textarea
              name="image"
              row="1"
              cols="50"
              value={newRecipe.image}
              onChange={handleSearch}>
            </textarea><br/><br/>
            {searchResultsMap(searchResults)}<br/>
          <input
            type="submit"
            value="Add"
            style={{
              color: 'white',
              fontSize: '12px',
              backgroundColor: '#ff9248',
              padding: '10px 20px',
              textAlign: 'center'}}
          /><br/><br/><br/><br/>
        </form>
        </div>
    )
  }

//// END OF SEARCH FUNCTIONALITIES ////

  return (
    <React.Fragment>
      {showButton ? form() : button()}
    </React.Fragment>
  )
}

export default RecipeForm
