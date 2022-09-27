class IngredientsClass {
    food: string;
    foodCategory: string;
    imgUrl: string;
    text: string;
    weight: Number;

    constructor ( 
        food: string,
        foodCategory: string,
        imgUrl: string,
        text: string,
        weight: Number,
    ) {
        this.food = food;
        this.foodCategory = foodCategory;
        this.imgUrl = imgUrl;
        this.text = text;
        this.weight = weight;
    }
}

export default IngredientsClass