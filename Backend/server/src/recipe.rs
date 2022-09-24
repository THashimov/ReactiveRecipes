use serde::{Serialize, Deserialize};


#[derive(Debug, Serialize, Deserialize)]
pub struct SavedRecipes {
    pub saved_recipes: Vec<Recipe>
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Recipe {
    pub name: String,
    pub meal_type: String,
    pub img_url: String,
    pub health_labels: Vec<String>,
    pub portions: i32,
    pub ingredients: Ingredients,
    pub calories: i32,
    pub url_to_recipe: String
}

impl Recipe {
    pub fn init(
        name: String,
        meal_type: String,
        img_url: String,
        health_labels: Vec<String>,
        portions: i32,
        ingredients: Ingredients,
        calories: i32,
        url_to_recipe: String   
    ) -> Self {
        Recipe {
            name,
            meal_type,
            img_url,
            health_labels,
            portions,
            ingredients,
            calories,
            url_to_recipe
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Ingredients {
    pub food: String,
    pub food_category: String,
    pub img_url: String,
    pub measure: String,
    pub text: String,
    pub weight: i32
}   

impl Ingredients {
    pub fn init(
        food: String,
        food_category: String,
        img_url: String,
        measure: String,
        text: String,
        weight: i32    
    ) -> Self {
        Ingredients { food, food_category, img_url, measure, text, weight }
    }
}