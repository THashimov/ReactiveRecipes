import React from "react";

import FunctionalButton from '../CommonComponents/FunctionalButton';
import Navbar from "./Navbar";

const MobileHome: React.FC = () => {

    return (
      <div className='mobileHome'>
          <Navbar class='navbarLogo' />
          <div className="mobileHomeInfoText">
            <h1>Welcome To Reactive Recipes</h1>
            <h2>Let Us Help You Reduce Food Waste</h2>
          </div>
          <FunctionalButton title='Get Started' whichClass='functionalBtn getStartedBtn' imgSrc={null}/>
          <img src='images/ZeroWaste.jpg' alt="" className='zeroWasteImg' />
      </div>
    )
} 

export default MobileHome;