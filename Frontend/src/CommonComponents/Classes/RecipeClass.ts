class RecipeClass {
    recipeName: String;
    mealType: String;
    imgUrl: String;
    healthLabels: string [];
    portions: Number;
    ingredients: [];
    calories: Number;

    constructor(
        recipeName: String, 
        mealType: String, 
        imgUrl: String, 
        healthLabels: string[], 
        portions: Number, 
        ingredients: [],
        calories: Number) 
        {
            this.recipeName = recipeName; 
            this.imgUrl = imgUrl;
            this.mealType = mealType;
            this.healthLabels = healthLabels;
            this.portions = portions;
            this.ingredients = ingredients;
            this.calories = calories
        };
}

export default RecipeClass;