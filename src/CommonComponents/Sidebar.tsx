import React from "react";
import { Link } from "react-router-dom";

import MainLogo from "../CommonComponents/MainLogo";
import FunctionalButton from "./FunctionalButton";

interface SidebarProps {
    class: string
}
 
const Sidebar: React.FC<SidebarProps> = (prop) => {
    
    return (
        <div className={prop.class}>
            <MainLogo class='sidebarLogo'/>
            <FunctionalButton title='Register / Log In' id='registerBtn' />
            <div className="feedContainer">
                <p>Feed</p>
                <Link to={'/recipes/browse'}>Browse Recipes</Link>
                <Link to={'/recipes/trending'}>Trending Recipes</Link>
                <Link to={'/recipes/random'}>Chose For Me</Link>
            </div>
            <div className="myRecipesContainer">
                <p>My Recipes</p>
                <Link to={'/myrecipes/breakfast'}>Breakfast</Link>
                <Link to={'/myrecipes/lunch'}>Lunch</Link>
                <Link to={'/myrecipes/dinner'}>Dinner</Link>
                <Link to={'/shoppinglist/myshoppinglist'}>Shopping List</Link>
            </div>
            <Link className="aboutUs" to={'/aboutus'}>About Us</Link>
        </div>
        );
}
 
export default Sidebar;