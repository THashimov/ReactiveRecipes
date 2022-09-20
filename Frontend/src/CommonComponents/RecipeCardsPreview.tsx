import React, { useState } from "react";
import RecipeClass from "./Classes/RecipeClass";
import {AiFillStar} from 'react-icons/ai'
import { Link } from "react-router-dom";

interface RecipeCardsPreviewProps {
    recipeCard: RecipeClass;
}
 
const RecipeCardsPreview: React.FC<RecipeCardsPreviewProps> = (recipeCard) => {
    let stars: JSX.Element [] = []

    const rating = Math.floor(Math.random() * 5);
    const numberOfRatings = Math.floor(Math.random() * 50000);

    for (let i = 0; i < 5; i++) {
        if (i <= rating) {
            stars.push(<AiFillStar className={'star active'} key={i}/> )
        } else {
            stars.push(<AiFillStar className={'star'} key={i}/> )
        }
    }


    return (  
        <div className='recipeCardContainer'>
            <div className="recipeCard">
                 <Link to='/recipe-instructions' >
                     <img src={recipeCard.recipeCard.imgUrl} alt="" />
                 </Link>
                 <h4>{recipeCard.recipeCard.mealType}</h4>
                 <h5>{recipeCard.recipeCard.recipeName}</h5>
                     <div className="ratingContainer">
                        {stars}
                         <p>{numberOfRatings}</p>
                     </div>
             </div>
        </div>
    );
}
 
export default RecipeCardsPreview;