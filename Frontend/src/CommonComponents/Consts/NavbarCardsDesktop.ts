import SidebarCards from "../Classes/SidebarCards";

const sidebarFeed = new SidebarCards('Feed', ['Browse Recipes', 'Search By Ingredient', 'Search By Cuisine', 'Search By Country', 'Search For Snacks', 'Search For Desserts']);

const sidebarMyRecipes = new SidebarCards('My Recipes', ['All Recipes', 'Breakfast', 'Lunch', 'Dinner', 'Shopping List']);

export default [sidebarFeed, sidebarMyRecipes];