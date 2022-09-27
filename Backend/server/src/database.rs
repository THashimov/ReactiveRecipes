use mongodb::{Collection, bson::Document, Client};
use std::env;
use dotenv::dotenv;

use crate::recipe::Recipe;


pub struct Database {
    pub collection: Collection<Recipe>
}

impl Database {
    pub async fn init() -> Self {
        dotenv().ok();

        let uri = match env::var("MONGOURI") {
            Ok(uri) => uri,
            Err(_) => format!("No uri found")
        };
    
        let client = Client::with_uri_str(uri).await.unwrap();
        let db = client.database("recipe");
        let recipes: Collection<Recipe> = db.collection("recipes");
        
        Database {collection: recipes}
    }
}