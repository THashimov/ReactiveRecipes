import React, { useEffect, useState } from "react";
import {AiOutlineLoading3Quarters} from 'react-icons/ai';

import Navbar from "./Navbar";
import useFetchRecipes from "../CommonComponents/useFetchRecipes";
import RecipeCardsPreview from "../CommonComponents/RecipeCardsPreview";

type T = {
    
}

 
const BrowseRecipesPageMobile: React.FC<T> = () => {
    const addr: String = (process.env.REACT_APP_PRODUCT_SEARCH_URL) as string + 'italian' + process.env.REACT_APP_API_KEY;
    const [recipeCards, setRecipeCards] = useState<JSX.Element []>();
    const {savedData, apiData, isLoading} = useFetchRecipes(addr);

    const cssRoot: HTMLElement | null = document.querySelector(':root');

    useEffect(() => {
      if (cssRoot !== null) {
        isLoading ? cssRoot.style.setProperty('--browseHomePageHeight', '100vh') : cssRoot.style.setProperty('--browseHomePageHeight', '100%')
      }
    }, [isLoading])


    const recipes: JSX.Element [] = [];

    useEffect(() => {
      if (apiData != undefined) {
        for (let i = 0; i < apiData.length; i++) {
          apiData[i].capitaliseMealType();
          recipes.push(<RecipeCardsPreview recipeCard={apiData[i]} key={i} />)
        }
        setRecipeCards(recipes);
      }
    }, [apiData]);


    return (
      <div className="browseMobile">
        <Navbar class='navbarLogoBrowse'/>
        {isLoading && <AiOutlineLoading3Quarters size={40} className={'loadingSpinner'}/>}
        {!isLoading && recipeCards}
      </div>
      );
}
 
export default BrowseRecipesPageMobile;