import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = "77165a02";
  const APP_KEY = " 5c5b6e7d93a2b00604c0beb1f8f06f4f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query])


  //use effect should only work when search button is clicked

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits)
  }


  const updateSearch = e => {

    setSearch(e.target.value);
    //upadted value
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search) ;
    setSearch('');
  }



  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar"
        placeholder="Which food are you looking for?"
          onChange={updateSearch}
          value={search}
          type="text" />
        <button className="search-button"
          type="submit"
        >Search</button>
      </form>
     <div className="recipes">
     {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingred={recipe.recipe.ingredients}
        />
      ))}
     </div>
    </div>
  )
}

export default App;
