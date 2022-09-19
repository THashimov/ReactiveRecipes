import React from "react";
import useFetchRecipes from "./useFetchRecipes";

interface SavedRecipesPageProps {
    
}
 
const AllRecipesPage: React.FC<SavedRecipesPageProps> = () => {
    const addr = 'http://127.0.0.1:8000/recipes/my-recipes/all-recipes/get'
    const {savedData, apiData, isLoading} = useFetchRecipes(addr);

    console.log(savedData);
    return ( <div>
        {isLoading && <p>loading</p>}
        {!isLoading && <p>done</p>}
    </div> );
}
 
export default AllRecipesPage;