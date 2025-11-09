import "./navbar.css";
import { NavLink } from "react-router";

function Navbar(){
    return(
        <>
        <nav>
            <div className="brand-container">
                <h1>// RAMSAY</h1>
            </div>
            <div>
                <h1><NavLink to='/recipes'>RECIPES</NavLink></h1>
            </div>
            <div>
                <h1><NavLink to='/'>LOGIN \\</NavLink></h1>
            </div>
        </nav>
        </>
    )
}

export default Navbar