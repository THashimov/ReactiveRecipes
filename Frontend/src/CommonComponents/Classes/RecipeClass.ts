class RecipeClass {
    recipeName: string;
    mealType: string;
    imgUrl: string;
    healthLabels: string [];
    portions: Number;
    ingredients: [];
    calories: Number;
    rating: Number;
    numberOfRatings: Number;

    constructor(
        recipeName: string, 
        mealType: string, 
        imgUrl: string, 
        healthLabels: string[], 
        portions: Number, 
        ingredients: [],
        calories: Number
        ) 
        {
            this.recipeName = recipeName; 
            this.imgUrl = imgUrl;
            this.mealType = mealType;
            this.healthLabels = healthLabels;
            this.portions = portions;
            this.ingredients = ingredients;
            this.calories = calories;
            this.rating = 0;
            this.numberOfRatings = 0;
        };
}

export default RecipeClass;