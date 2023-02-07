
import './App.css';
import { useEffect, useState } from 'react';
import  video  from './food.mp4';
import MyRecipeComponent from './MyRecipeComponent';



function App() {
const MY_ID = "3ab00706";
const MY_KEY = "a8cd9ad5e51c62745b22673017ca796d";	

const [mySearch, setMySearch] = useState ('');
const [myRecipes, setMyRecipes] = useState ([]);
const [wordSubmitted, setWordSubmitted] = useState (['avocado']);


useEffect (() => {
  const getQuotes = async () => {
  const responce = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await responce.json();
  
  setMyRecipes(data.hits);
}
getQuotes()

},[wordSubmitted])

const myRecipeSearch = (e) => {
  
  setMySearch (e.target.value)
}

// что-бы не перегружалась страница

const finalSearch = (e) => {
e.preventDefault();
setWordSubmitted(mySearch);
}


return (
  <div className="App">

    <div className="container">
      <video autoPlay muted loop><source src={ video } type="video/mp4"/></video>
      <h1>Find a Recipe</h1>
    </div>
     
    <div className="container">
      <form onSubmit={finalSearch}>
        <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}></input>
      </form>
      <button>
        <img src="https://cdn-icons-png.flaticon.com/512/4478/4478006.png" width="30px" alt='searcher' className='icons'/>
      </button>
    </div>

   

    <div>
        {myRecipes.map(element => (
        <MyRecipeComponent label={element.recipe.label} image={element.recipe.image} calories={element.recipe.calories} ingredients={element.recipe.ingredientLines}/>
      ))}
    </div>     
  </div>    
  );
}

export default App;
