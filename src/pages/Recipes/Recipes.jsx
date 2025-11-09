import "./recipes.css";
import { useState, useEffect } from "react";
import hero from "../../assets/images/ramsay-hero.webp";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

function Recipes(){

  const [recipes, setRecipes] = useState([]);
  const [skip,setSkip] = useState(0);
  const [limit,setLimit] = useState(16);

  useEffect(()=>{
    fetch(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
    .then((response)=>response.json())
    .then((data)=>{
      setRecipes(data.recipes);
      console.log(data.recipes);
    })

  },[skip,limit]);

    return(
        <>
            <div className="hero-container">
                <img src={hero} alt="Gordon Ramsay Header"/>
            </div>

            <div className="header-container">
                <h2>// RECIPES</h2>
                <p>The recipes from the legend himself</p>
            </div>

            <div className="main-container">
                <div className="card-container">
                        {recipes.map((recipe)=>{
                        return(
                            <RecipeCard key={recipe.id} recipe={recipe}/>
                        )
                        })}
                </div>
                

            <div id="button-container">
            <button onClick={()=>setSkip(Math.max(0,skip-limit))}>
                <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <button onClick={()=>setSkip((skip+limit))}>
                <span class="material-symbols-outlined">chevron_right</span>
            </button>
            {/*
            <select onChange={(evt)=>setLimit(evt.target.value)}>
                <option value="4">4 items</option>
                <option value="8">8 items</option>
                <option value="12">12 items</option>
                <option value="16">16 items</option>
            </select>
            */}
            </div>
            </div>
        </>
    )
}

export default Recipes