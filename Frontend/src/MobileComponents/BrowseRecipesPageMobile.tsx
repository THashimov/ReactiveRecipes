import React, { useEffect } from "react";
import Navbar from "./Navbar";
import useFetchRecipes from "../CommonComponents/useFetchRecipes";
import RecipeClass from "../CommonComponents/Classes/RecipeClass";
import RecipeCardsPreview from "../CommonComponents/RecipeCardsPreview";

interface BrowseRecipesPageMobileProps {
    
}

 
const BrowseRecipesPageMobile: React.FC<BrowseRecipesPageMobileProps> = () => {
    const addr: String = (process.env.REACT_APP_PRODUCT_SEARCH_URL) as string + 'italian' + process.env.REACT_APP_API_KEY;

    // This returns 20 recipes already as a RecipeClass
    const {savedData, apiData, isLoading} = useFetchRecipes(addr);

    let cards: JSX.Element [] = [];
    useEffect(() => {
      if (apiData != undefined) {
        for (let i = 0; i < apiData.length; i++) {
          cards.push(<RecipeCardsPreview recipeCard={apiData[i]} key={i} />);
        }
      }
    }, [apiData]);


    
    return (
      <div className="browseMobile">
        <Navbar class='navbarLogoBrowse'/>
        {!isLoading && cards}
      </div>
      );
}
 
export default BrowseRecipesPageMobile;