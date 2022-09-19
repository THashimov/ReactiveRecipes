import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const fetchAllSavedRecipes = async () : Promise<Response>  => {
    const recipes = await fetch('')
    const data = await recipes.json();
    return data
}

interface AllRecipesPageProps {
    
}
 
const AllRecipesPage: React.FC<AllRecipesPageProps> = () => {
    let allSavedRecipes = fetchAllSavedRecipes();
    return ( <div>
        <p>hello</p>
    </div> );
}
 
export default AllRecipesPage;