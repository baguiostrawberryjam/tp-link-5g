import "./recipe-card.css";

const recipe = {
  id: 1,
  name: "Classic Margherita Pizza",
  ingredients: [
    "Pizza dough",
    "Tomato sauce",
    "Fresh mozzarella cheese",
    "Fresh basil leaves",
    "Olive oil",
    "Salt and pepper to taste"
  ],
  instructions: [
    "Preheat the oven to 475°F (245°C).",
    "Roll out the pizza dough and spread tomato sauce evenly.",
    "Top with slices of fresh mozzarella and fresh basil leaves.",
    "Drizzle with olive oil and season with salt and pepper.",
    "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
    "Slice and serve hot."
  ],
  prepTimeMinutes: 20,
  cookTimeMinutes: 15,
  servings: 4,
  difficulty: "Easy",
  cuisine: "Italian",
  caloriesPerServing: 300,
  tags: ["Pizza", "Italian"],
  userId: 166,
  image: "https://cdn.dummyjson.com/recipe-images/1.webp",
  rating: 4.6,
  reviewCount: 98,
  mealType: ["Dinner"]
};

function RecipeCard() {
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
