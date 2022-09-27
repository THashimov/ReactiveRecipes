#[macro_use] extern crate rocket;

mod recipe;
mod database;

use recipe::{Recipe, SavedRecipes};
use database::Database;
use mongodb::{bson::{doc, from_document}};
use rocket::{serde::json::{Json}, fs::{FileServer}, futures::TryStreamExt, State};


#[post("/my-recipes/add-recipe", data = "<recipe>")]
async fn save_recipe(recipe: Json<Recipe>, db: &State<Database>) {

    println!("{:?}", recipe);

    // db.insert_one(doc! {
    //     "name": &recipe.name,
    //     "mealType": &recipe.meal_type,
    //     "imgUrl": &recipe.img_url,
    //     "healthLabels": &recipe.health_labels, 
    //     "portions": &recipe.portions, 
    //     "ingredients": &recipe.ingredients, 
    //     "calories": &recipe.calories, 
    //     "urlToRecipe": &recipe.url_to_recipe, 

    // }, None).await.unwrap();
}

#[get("/my-recipes/all-recipes/get")]
async fn retrieve_all_saved_recipes(db: &State<Database>) -> Json<SavedRecipes> {
    let mut cursor = db.db.find(None, None).await.unwrap();

    let mut all_recipes = SavedRecipes {saved_recipes: vec![]};

    while let Some(result) = cursor.try_next().await.unwrap() {
        let result: Recipe = from_document(result).unwrap();
        all_recipes.saved_recipes.push(result)
    }

    Json(all_recipes)
}


#[get("/my-recipes/<recipe_name>/get")]
async fn find_single_recipe(recipe_name: &str, db: &State<Database>) {
    let query = doc! { "name": recipe_name};

    if let Ok(Some(recipe_in_doc)) = db.db.find_one(query.clone(), None).await {
        println!("{:?}", Json(recipe_in_doc));
    } else {
        println!("err");
    }
}

#[launch]
async fn rocket() -> _ {
    let db = Database::init().await;
    rocket::build()
    .attach(Cors)
    .mount("/recipes", routes![save_recipe, find_single_recipe, retrieve_all_saved_recipes])
    .mount("/", FileServer::from("../../Frontend/build/"))
    .manage(db)
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