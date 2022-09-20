import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import useFetchRecipes from "../CommonComponents/useFetchRecipes";
import RecipeClass from "../CommonComponents/Classes/RecipeClass";
import RecipeCardsPreview from "../CommonComponents/RecipeCardsPreview";

interface BrowseRecipesPageMobileProps {
    
}

 
const BrowseRecipesPageMobile: React.FC<BrowseRecipesPageMobileProps> = () => {
    const addr: String = (process.env.REACT_APP_PRODUCT_SEARCH_URL) as string + 'italian' + process.env.REACT_APP_API_KEY;
    const [recipeCards, setRecipeCards] = useState<JSX.Element []>();

    const {savedData, apiData, isLoading} = useFetchRecipes(addr);

    const recipes: JSX.Element [] = [];

    useEffect(() => {
      if (apiData != undefined) {
        for (let i = 0; i < apiData.length; i++) {
          apiData[i].capitalise();
          recipes.push(<RecipeCardsPreview recipeCard={apiData[i]} key={i} />)
        }
        setRecipeCards(recipes);
    }
    }, [apiData]);


    return (
      <div className="browseMobile">
        <Navbar class='navbarLogoBrowse'/>
        {!isLoading && recipeCards}
      </div>
      );
}
 
export default BrowseRecipesPageMobile;