import "./recipes.css";
import hero from "../../assets/images/ramsay-hero.webp";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

function Recipes(){
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
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>
            </div>
        </>
    )
}

export default Recipes