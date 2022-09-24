import { useEffect, useState } from "react";

import RecipeClass from "./Classes/RecipeClass";


const useFetchRecipes = (arg: String) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [savedData, setSavedData] = useState();
    const [apiData, setApiData] = useState<RecipeClass[]>();

    useEffect(() => {
        setTimeout(() => {
        const recipes = fetch('' + arg)
        .then(res => res.json())
        .then(
            (data) => {
                if (arg.includes('edamam')) {
                    const recipes = createClass(data.hits);
                    setApiData(recipes);
                    setIsLoading(false);
                } else {
                    setSavedData(data);
                    setIsLoading(false);
                }
            }
        );
    }, 2000);
    }, [arg])

    return {savedData, apiData, isLoading}
}

const createClass = (recipeData) : RecipeClass [] => {
    console.log(recipeData)
    let recipes: RecipeClass [] = [];
    let ingredients = [];

    for (let i = 0; i < recipeData.ingredients.length; i++) {
        
    }

    for (let i = 0; i < recipeData.length; i++) {
        let recipeName = recipeData[i].recipe.label;
        let mealType = recipeData[i].recipe.mealType[0];
        let imgUrl = recipeData[i].recipe.images.REGULAR.url;
        let healthLabels = recipeData[i].recipe.healthLabels
        let portions = recipeData[i].recipe.yield;
        let ingredients = recipeData[i].recipe.ingredients[i];
        let calories = recipeData[i].recipe.totalNutrients.ENERC_KCAL.quantity;
        let url = recipeData[i].recipe.url;
    
        const recipe = new RecipeClass(
            recipeName, mealType, imgUrl, healthLabels, portions, ingredients, calories, url
        );

        recipes.push(recipe);
    }
    

    return recipes
}

export default useFetchRecipes;