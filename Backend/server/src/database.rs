use mongodb::{Collection, Client};
use std::env;
use dotenv::dotenv;

use crate::recipe::Recipe;
use crate::user::User;

pub struct Database {
    pub recipe_collection: Collection<Recipe>,
    pub user_collection: Collection<User>
}

impl Database {
    pub async fn init() -> Self {
        dotenv().ok();

        let uri = match env::var("MONGOURI") {
            Ok(uri) => uri,
            Err(_) => format!("No uri found")
        };
    
        let client = Client::with_uri_str(uri).await.unwrap();
        
        let recipe_db = client.database("recipes");
        let users_db = client.database("users");

        let recipes: Collection<Recipe> = recipe_db.collection("recipe");
        let users: Collection<User> = users_db.collection("users");
        
        Database {recipe_collection: recipes, user_collection: users}
    }
}