import React from "react";
import RecipeClass from "./Classes/RecipeClass";
import {AiFillStar} from 'react-icons/ai'
import { Link } from "react-router-dom";

interface RecipeCardsPreviewProps {
    recipeCard: RecipeClass;
}
 
const RecipeCardsPreview: React.FC<RecipeCardsPreviewProps> = (recipeCard) => {
    
    return (  
        <div className='recipeCardContainer'>
            <div className="recipeCard">
                 <Link to='/recipe-instructions' >
                     <img src={recipeCard.recipeCard.imgUrl} alt="" />
                 </Link>
                 <h4>{recipeCard.recipeCard.mealType}</h4>
                 <h5>{recipeCard.recipeCard.recipeName}</h5>
                     <div className="ratingContainer">
                         <AiFillStar />
                         <AiFillStar />
                         <AiFillStar />
                         <AiFillStar />
                         <AiFillStar />
                         <p>{recipeCard.recipeCard.numberOfRatings.toString()}</p>
                     </div>
             </div>
        </div>
    );
}
 
export default RecipeCardsPreview;