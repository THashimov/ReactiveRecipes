use serde::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct User {
    pub email: String,
    pub password: String
}

impl User {
    pub fn new_user(email: String, password: String) -> Self{
        User { email: email, password: password }
    }
}