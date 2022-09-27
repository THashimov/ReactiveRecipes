use mongodb::{Collection, bson::Document, Client};
use std::env;
use dotenv::dotenv;


pub struct Database {
    pub db: Collection<Document>
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
        let recipes: Collection<Document> = db.collection("recipes");
        
        Database {db: recipes}
    }
}