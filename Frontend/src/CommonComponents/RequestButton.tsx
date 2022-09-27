import React from "react";
import RecipeClass from "./Classes/RecipeClass";

type T = {
    title: string;
    whichClass: string;
    recipe: RecipeClass
};

const FunctionalButton: React.FC<T> = ({title, whichClass, recipe}) => {
    console.log(JSON.stringify(recipe))
    const postRequest = () => {
        fetch(
            '/recipes/my-recipes/add-recipe',
            {
                method: 'POST',
                body: JSON.stringify(recipe)}
        )
        // console.log(JSON.stringify(recipe, null, 2))
    }

    return (
        <button className={whichClass} onClick={postRequest}>
            {title}
        </button>
      );
}

export default FunctionalButton;