import React from "react";
import useFetchRecipes from "./useFetchRecipes";

interface BrowseRecipesPageProps {
    
}
 
const BrowseRecipesPage: React.FC<BrowseRecipesPageProps> = () => {
    const addr: String = (process.env.REACT_APP_PRODUCT_SEARCH_URL) as string + 'italian' + process.env.REACT_APP_API_KEY;

    const {savedData, apiData, isLoading} = useFetchRecipes(addr);

    console.log(apiData);
    
    return (
        <p>Browse</p>
      );
}
 
export default BrowseRecipesPage;