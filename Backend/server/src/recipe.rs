use serde::{Serialize, Deserialize};


#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SavedRecipes {
    pub saved_recipes: Vec<Recipe>
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Recipe {
    pub recipe_name: String,
    pub meal_type: String,
    pub img_url: String,
    pub health_labels: Vec<String>,
    pub portions: f32,
    pub ingredients: Vec<Ingredients>,
    pub calories: f32,
    pub url_to_recipe: String,
    pub rating: f32,
    pub how_many_ratings: f32
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Ingredients {
    pub food: String,
    pub food_category: String,
    pub img_url: String,
    pub text: String,
    pub weight: f32
}   

impl Recipe {
    pub fn new_recipe(
        recipe_name: String,
        meal_type: String,
        img_url: String,
        health_labels: Vec<String>,
        portions: f32,
        ingredients: Vec<Ingredients>,
        calories: f32,
        url_to_recipe: String,
        rating: f32,
        how_many_ratings: f32
    ) -> Self {
        Recipe {
            recipe_name,
            meal_type,
            img_url,
            health_labels,
            portions,
            ingredients,
            calories,
            url_to_recipe,
            rating,
            how_many_ratings
        }
    }
}

impl Ingredients {
    pub fn new_ingredients(
        food: String,
        food_category: String,
        img_url: String,
        text: String,
        weight: f32
    ) -> Self {
        Ingredients { food, food_category, img_url, text, weight }
    }
}