use serde::{Serialize, Deserialize};


#[derive(Debug, Serialize, Deserialize)]
pub struct SavedRecipes {
    pub saved_recipes: Vec<Recipe>
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Recipe {
    pub name: String,
    pub meal_type: String,
    pub img_url: String,
    pub health_labels: Vec<String>,
    pub portions: f32,
    pub ingredients: Ingredients,
    pub calories: f32,
    pub url_to_recipe: String
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Ingredients {
    pub food: String,
    pub food_category: String,
    pub img_url: String,
    pub measure: String,
    pub text: String,
    pub weight: f32
}   
