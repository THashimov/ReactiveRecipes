import React, { useEffect, useState } from "react";

import MainLogo from "../CommonComponents/MainLogo";
import ZeroWasteImg from '../assets/ZeroWaste.jpg';

import BurgerMenu from "./BurgerMenu";
import FunctionalButton from '../CommonComponents/FunctionalButton';
import Sidebar from "../CommonComponents/Sidebar";
import SidebarCards from "../CommonComponents/Classes/SidebarCards";

const MobileHome: React.FC = () => {
    const [sidebarView, setSidebarState] = useState<boolean>(false);
    const [sidebarAnim, setSidebarAnim] = useState<string>('sidebar hidden');
    
    const sidebarFeed = new SidebarCards('Feed', ['Browse Recipes', 'Trending Recipes', 'Chose For Me']);
    const sidebarMyRecipes = new SidebarCards('My Recipes', ['Breakfast', 'Lunch', 'Dinner', 'Shopping List']);

    useEffect(() => {
      sidebarView ? setSidebarAnim('sidebar showing') : setSidebarAnim('sidebar hidden');
    }, [sidebarView]);

    return (
      <div className='mobileHome'>
          <Sidebar class={sidebarAnim} sidebarCards={[sidebarFeed, sidebarMyRecipes]}/>
          <BurgerMenu isSidebarOpen={sidebarView} setSidebarState={setSidebarState}/>
          <MainLogo class='mobileHomeLogo' />
          <div className="mobileHomeInfoText">
            <h1>Welcome To Reactive Recipes</h1>
            <h2>Let Us Help You Reduce Food Waste</h2>
          </div>
          <FunctionalButton title='Get Started' id='getStartedBtn' imgSrc={null}/>
          <img src={ZeroWasteImg} alt="" className='zeroWasteImg' />
      </div>
    )
} 

export default MobileHome;