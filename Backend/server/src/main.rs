#[macro_use] extern crate rocket;


use std::env;

use mongodb::{Client, Collection, options::FindOptions, error::Error, bson::{Document, doc}};
use rocket::{serde::json::{Json}, futures::{TryStreamExt, StreamExt}, fs::{FileServer}};
use dotenv::dotenv;
use serde::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize)]
struct Recipe {
    name: String,
    ingredients: String
}

#[derive(Debug, Serialize, Deserialize)]
struct SavedRecipes {
    saved_recipes: Vec<Recipe>
}

#[post("/add-recipe", data = "<recipe>")]
async fn save_recipe(recipe: Json<Recipe>) {
    let recipes = connect_to_db().await;

    recipes.insert_one(doc! {
        "name": recipe.name.to_owned(),
        "ingredients": recipe.ingredients.to_owned()
    }, None).await.unwrap();
}

#[get("/my-recipes/all")]
async fn retrieve_all_saved_recipes()  {
    let recipes = connect_to_db().await;
    let cursor = recipes.find(None, None).await.unwrap();

    let results: Vec<Result<Document, Error>> = cursor.collect().await;

    println!("{:?}", results);
}

#[get("/my-recipes/<recipe_name>")]
async fn find_single_recipe(recipe_name: &str) {
    let query = doc! { "name": recipe_name};

    let recipes = connect_to_db().await;
   
    if let Ok(Some(recipe_in_doc)) = recipes.find_one(query.clone(), None).await {
        println!("{:?}", Json(recipe_in_doc));
    } else {
        println!("err");
    }
}

#[launch]
fn rocket() -> _ {
    rocket::build()
    .mount("/recipes", routes![save_recipe, find_single_recipe, retrieve_all_saved_recipes])
    .mount("/", FileServer::from("../../Frontend/build/"))
}








// // // // // // // // Helpers - to be moved in future  // //  // // // // // // 

async fn connect_to_db() -> Collection<Document> {
    dotenv().ok();

    let uri = match env::var("MONGOURI") {
        Ok(uri) => uri,
        Err(_) => format!("No uri found")
    };

    let client = Client::with_uri_str(uri).await.unwrap();
    let db = client.database("recipe");
    let recipes: Collection<Document> = db.collection("recipes");

    recipes
}