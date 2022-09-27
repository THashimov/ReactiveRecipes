import { useEffect, useState } from "react";
import IngredientsClass from "./Classes/IngredientsClass";

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
    let recipes: RecipeClass [] = [];

    for (let i = 0; i < recipeData.length; i++) {
        let ingredients = createIngredientsArray(recipeData[i].recipe.ingredients)
        let recipeName = recipeData[i].recipe.label;
        let mealType = recipeData[i].recipe.mealType[0];
        let imgUrl = recipeData[i].recipe.images.REGULAR.url;
        let healthLabels = recipeData[i].recipe.healthLabels
        let portions = recipeData[i].recipe.yield;
        let calories = recipeData[i].recipe.totalNutrients.ENERC_KCAL.quantity;
        let url = recipeData[i].recipe.url;
    
        const recipe = new RecipeClass(
            recipeName, mealType, imgUrl, healthLabels, portions, ingredients, calories, url
        );

        recipes.push(recipe);
    }

    return recipes
}

const createIngredientsArray = (ingredientData) : IngredientsClass [] => {
    let ingredients: IngredientsClass [] = [];

    for (let i = 0; i < ingredientData.length; i++) {

        let food = ingredientData[i].food;
        let foodCategory = ingredientData[i].foodCategory;
        let imgUrl = ingredientData[i].image;
        let text = ingredientData[i].text;
        let weight = ingredientData[i].weight;
    
        const ingredientClass = new IngredientsClass(
            food, foodCategory, imgUrl, text, weight
        );
        
        ingredients.push(ingredientClass);
    };
    
    return ingredients
}

export default useFetchRecipes;