import React, { useEffect, useState } from "react";

import MainLogo from "../CommonComponents/MainLogo";
import ZeroWasteImg from '../assets/ZeroWaste.jpg';

import FunctionalButton from '../CommonComponents/FunctionalButton';
import SidebarCards from "../CommonComponents/Classes/SidebarCards";
import Navbar from "./Navbar";

const MobileHome: React.FC = () => {
    const sidebarFeed = new SidebarCards('Feed', ['Browse Recipes', 'Trending Recipes', 'Chose For Me']);
    const sidebarMyRecipes = new SidebarCards('My Recipes', ['All Recipes', 'Breakfast', 'Lunch', 'Dinner', 'Shopping List']);

    return (
      <div className='mobileHome'>
          <Navbar class='navbarLogo' sidebarFeed={sidebarFeed} sidebarMyRecipes={sidebarMyRecipes}/>
          <div className="mobileHomeInfoText">
            <h1>Welcome To Reactive Recipes</h1>
            <h2>Let Us Help You Reduce Food Waste</h2>
          </div>
          <FunctionalButton title='Get Started' whichClass='functionalBtn getStartedBtn' imgSrc={null}/>
          <img src={ZeroWasteImg} alt="" className='zeroWasteImg' />
      </div>
    )
} 

export default MobileHome;