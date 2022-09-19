import React from "react";
import RecipeClass from "./Classes/RecipeClass";
import {AiFillStar} from 'react-icons/ai'

interface RecipeCardsPreviewProps {
    recipeCard: RecipeClass;
}
 
const RecipeCardsPreview: React.FC<RecipeCardsPreviewProps> = (prop) => {
    return (  
        <div className='recipeCardContainer'>
            <div className="recipeCard">
                <img src={prop.recipeCard.imgUrl} alt="" />
                <h4>{prop.recipeCard.mealType}</h4>
                <h5>{prop.recipeCard.recipeName}</h5>
                    <div className="ratingContainer">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <p>{prop.recipeCard.numberOfRatings.toString()}</p>
                    </div>
            </div>
        </div>
    );
}
 
export default RecipeCardsPreview;