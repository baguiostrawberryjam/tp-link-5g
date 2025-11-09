import "./not-found.css";
import hero from "../../assets/images/ramsay-hero.webp";

function NotFound(){
    return(
        <>
            <div className="hero-container">
                <img src={hero} alt="Gordon Ramsay Header"/>
            </div>

            <div className="header-container">
                <h2>// 404 NOT FOUND</h2>
                <p>It seems you did not follow the recipes correctly</p>
            </div>
        </>
    )
}

export default NotFound