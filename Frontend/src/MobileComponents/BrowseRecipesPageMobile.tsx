import React from "react";
import Navbar from "./Navbar";
import useFetchRecipes from "../CommonComponents/useFetchRecipes";

interface BrowseRecipesPageMobileProps {
    
}
 
const BrowseRecipesPageMobile: React.FC<BrowseRecipesPageMobileProps> = () => {
    const addr: String = (process.env.REACT_APP_PRODUCT_SEARCH_URL) as string + 'italian' + process.env.REACT_APP_API_KEY;

    // const {savedData, apiData, isLoading} = useFetchRecipes(addr);

    // console.log(apiData);
    
    return (
      <div className="browseMobile">
        <Navbar class='navbarLogoBrowse'/>
      </div>
      );
}
 
export default BrowseRecipesPageMobile;