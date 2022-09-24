#[macro_use] extern crate rocket;

mod recipe;

use std::env;
use recipe::{Recipe, SavedRecipes, Ingredients};
use mongodb::{Client, Collection, bson::{Document, doc, from_document, bson}};
use rocket::{serde::json::{Json, serde_json}, fs::{FileServer}, futures::TryStreamExt};
use dotenv::dotenv;


#[post("/my-recipes/add-recipe", data = "<recipe>")]
async fn save_recipe(recipe: Json<Recipe>) {
    let db = connect_to_db().await;
    
    db.insert_one(doc! {
        "name": &recipe.name,
        "mealType": &recipe.meal_type,
        "imgUrl": &recipe.img_url,
        "healthLabels": &recipe.health_labels, 
        "portions": &recipe.portions, 
        "ingredients": &recipe.ingredients, 
        "calories": &recipe.calories, 
        "urlToRecipe": &recipe.url_to_recipe, 

    }, None).await.unwrap();
}

#[get("/my-recipes/all-recipes/get")]
async fn retrieve_all_saved_recipes() -> Json<SavedRecipes> {
    let recipes = connect_to_db().await;
 
    let mut cursor = recipes.find(None, None).await.unwrap();

    let mut all_recipes = SavedRecipes {saved_recipes: vec![]};

    while let Some(result) = cursor.try_next().await.unwrap() {
        let result: Recipe = from_document(result).unwrap();
        all_recipes.saved_recipes.push(result)
    }

    Json(all_recipes)
}


#[get("/my-recipes/<recipe_name>/get")]
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
    .attach(Cors)
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


// // // // // // // Cors workaround // // // // // //
use rocket::fairing::{Fairing, Info, Kind};
use rocket::http::Header;
use rocket::{Request, Response};

#[options("/<_..>")]
fn _all_options() {
    /* Intentionally left empty */
}

pub struct Cors;

#[rocket::async_trait]
impl Fairing for Cors {
    fn info(&self) -> Info {
        Info {
            name: "Cross-Origin-Resource-Sharing Fairing",
            kind: Kind::Response,
        }
    }

    async fn on_response<'r>(&self, _request: &'r Request<'_>, response: &mut Response<'r>) {
        response.set_header(Header::new("Access-Control-Allow-Origin", "*"));
        response.set_header(Header::new(
            "Access-Control-Allow-Methods",
            "POST, PATCH, PUT, DELETE, HEAD, OPTIONS, GET",
        ));
        response.set_header(Header::new("Access-Control-Allow-Headers", "*"));
        response.set_header(Header::new("Access-Control-Allow-Credentials", "true"));
    }
}