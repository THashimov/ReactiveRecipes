#[macro_use] extern crate rocket;

mod recipe;
mod database;
mod user;

use recipe::{Recipe, SavedRecipes, Ingredients};
use database::Database;
use user::User;
use mongodb::bson::doc;
use rocket::{serde::json::{Json}, fs::{FileServer}, State, futures::TryStreamExt, http::Status};


#[post("/my-recipes/add-recipe", data = "<recipe>")]
async fn save_recipe(recipe: Json<Recipe>, db: &State<Database>) {
    let doc = doc! { "recipeName": &recipe.recipe_name};

    if let Ok(Some(_)) = db.recipe_collection.find_one(doc, None).await {
    } else {
    // This feels like it's probably quite inefficient, there is likely a better way to do this using serde. Needs looking at
    let mut ingredients = vec![];
    
    for i in 0..recipe.ingredients.len() {
        let ing = Ingredients::new_ingredients(
            recipe.ingredients[i].food.clone(), 
            recipe.ingredients[i].food_category.clone(), 
            recipe.ingredients[i].img_url.clone(), 
            recipe.ingredients[i].text.clone(), 
            recipe.ingredients[i].weight);
        ingredients.push(ing);
    }

    let recipe = Recipe::new_recipe(
        recipe.recipe_name.clone(), 
        recipe.meal_type.clone(), 
        recipe.img_url.clone(), 
        recipe.health_labels.clone(), 
        recipe.portions, 
        ingredients, 
        recipe.calories, 
        recipe.url_to_recipe.clone(), 
        recipe.rating, 
        recipe.how_many_ratings);

        db.recipe_collection.insert_one(recipe, None).await.unwrap();
    }
}

#[post("/register", data="<user_data>")]
async fn user_register(user_data: Json<User>, db: &State<Database>) {
    let usr = User::new_user(user_data.email.clone(), user_data.password.clone());

    db.user_collection.insert_one(usr, None).await.unwrap();
}

#[post("/login", data="<user_data>")]
async fn user_login(user_data: Json<User>, db: &State<Database>) -> Status {
    let usr = User::new_user(user_data.email.clone(), user_data.password.clone());

    let mut cursor = db.user_collection.find(None, None).await.unwrap();

    while let Some(user_in_db) = cursor.try_next().await.unwrap() {
        if user_in_db.email == usr.email {
            if user_in_db.password == usr.password {
                return Status::Found
            }
        }
    }
    return Status::NotFound
}


#[get("/my-recipes/all-recipes/get")]
async fn retrieve_all_saved_recipes(db: &State<Database>) -> Json<SavedRecipes> {
    let mut cursor = db.recipe_collection.find(None, None).await.unwrap();

    let mut saved_recipes = vec![];

    while let Some(recipe) = cursor.try_next().await.unwrap() {
        saved_recipes.push(recipe);
    };

    Json(SavedRecipes{saved_recipes})
}


#[get("/my-recipes/<recipe_name>/get")]
async fn find_single_recipe(recipe_name: &str, db: &State<Database>) -> Json<Recipe> {
    let query = doc! { "recipeName": recipe_name};
    
    let recipe = db.recipe_collection.find_one(query, None).await.unwrap();

    Json(recipe.unwrap())
}

#[launch]
async fn rocket() -> _ {
    let db = Database::init().await;
    rocket::build()
    .attach(Cors)
    .mount("/recipes", routes![save_recipe, find_single_recipe, retrieve_all_saved_recipes])
    .mount("/user", routes![user_login, user_register])
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