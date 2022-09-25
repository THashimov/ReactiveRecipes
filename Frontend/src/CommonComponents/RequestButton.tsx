import React from "react";
import RecipeClass from "./Classes/RecipeClass";

type T = {
    title: string;
    whichClass: string;
    recipe: RecipeClass
};

const FunctionalButton: React.FC<T> = ({title, whichClass, recipe}) => {
    const postRequest = () => {
        console.log(recipe)
    }

    return (
        <button className={whichClass} onClick={postRequest}>
            {title}
        </button>
      );
}

export default FunctionalButton;