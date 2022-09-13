import React, { useEffect, useState } from "react";

import MainLogo from "../CommonComponents/MainLogo";
import ZeroWasteImg from '../assets/ZeroWaste.jpg';

import BurgerMenu from "./BurgerMenu";
import FunctionalButton from '../CommonComponents/FunctionalButton';
import Sidebar from "../CommonComponents/Sidebar";


const MobileHome: React.FC = () => {
    const [sidebarView, setSidebarState] = useState<boolean>(false);
    const [sidebarAnim, setSidebarAnim] = useState<string>('sidebar hidden');

    useEffect(() => {
      sidebarView ? setSidebarAnim('sidebar showing') : setSidebarAnim('sidebar hidden');
    }, [sidebarView]);

    return (
      <div className='mobileHome'>
          <Sidebar class={sidebarAnim}/>
          <BurgerMenu isSidebarOpen={sidebarView} setSidebarState={setSidebarState}/>
          <MainLogo class='mobileHomeLogo' />
          <h1>Welcome To Reactive Recipes</h1>
          <h2>Let Us Help You Reduce Food Wastse</h2>
          <FunctionalButton title={'Get Started'} id={'getStartedBtn'}/>
          <img src={ZeroWasteImg} alt="" className='zeroWasteImg' />
      </div>
    )
} 

export default MobileHome;