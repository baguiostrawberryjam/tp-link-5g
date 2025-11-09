import "./recipe-view.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function RecipeView() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
        <div className="hero-container">
            <img
            src={recipe ? recipe.image : "https://placehold.co/1000x400"}
            alt={recipe ? recipe.name : "Recipe Hero Placeholder"}
            />
        </div>

        <div className="header-container">
            <h2>// {recipe ? recipe.name : "Loading..."}</h2>
            <p>
            {recipe
                ? `${recipe.cuisine} | ${recipe.difficulty} | ${recipe.caloriesPerServing} calories`
                : "Let him cook..."}
            </p>
        </div>

        {recipe ? (
            <div className="recipe-details-container">
            <div className="recipe-card-details">
                <span className="recipe-detail">
                <span className="material-symbols-outlined">kid_star</span>
                {recipe.rating} ({recipe.reviewCount} reviews)
                </span>
                <span className="recipe-detail">
                <span className="material-symbols-outlined">washoku</span>
                {recipe.servings} servings
                </span>
            </div>

        <div className="column-container">
            <div className="recipe-ingredients">
                <h3>Ingredients</h3>
                <ul>
                    {recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="recipe-instructions">
                <h3>Instructions</h3>
                <ol>
                    {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                    ))}
                </ol>
                </div>
            </div>
        </div>
        ) : (
            <p>Wait, Master Chef, cooking takes time...</p>
        )}
    </>
  );
}

export default RecipeView;
