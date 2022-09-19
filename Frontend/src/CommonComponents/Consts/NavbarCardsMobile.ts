import SidebarCards from "../Classes/SidebarCards";

const sidebarFeed = new SidebarCards('Feed', ['Browse Recipes', 'Trending Recipes', 'Chose For Me']);

const sidebarMyRecipes = new SidebarCards('My Recipes', ['All Recipes', 'Breakfast', 'Lunch', 'Dinner', 'Shopping List']);

export default [sidebarFeed, sidebarMyRecipes];