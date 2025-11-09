import "./recipe-card.css";

function RecipeCard({recipe}){
  return (
    <div className="recipe-card">
      <div className="recipe-card-image-container">
        <img
          className="recipe-card-image"
          src={recipe.image}
          alt={recipe.name}
        />
      </div>

      <div className="recipe-card-content">
        <div className="recipe-card-header">
          <h3 className="recipe-card-title">{recipe.name}</h3>
        </div>

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

      </div>
    </div>
  );
}

export default RecipeCard;
