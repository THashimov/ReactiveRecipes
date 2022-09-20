class RecipeClass {
    recipeName: string;
    mealType: string;
    imgUrl: string;
    healthLabels: string [];
    portions: Number;
    ingredients: [];
    calories: Number;
 

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
        };

    capitalise = () => {
        let newTitle: string = '';
        newTitle += (this.mealType.charAt(0).toUpperCase());
        for (let i = 1; i < this.mealType.length; i++) {
          newTitle += this.mealType.charAt(i);
          if(this.mealType.charAt(i) === '/') {
            newTitle = newTitle + this.mealType.charAt(i + 1).toUpperCase() + this.mealType.slice(i + 2);
            break;
          }
        } 
        this.mealType = newTitle;
    }
}

export default RecipeClass;