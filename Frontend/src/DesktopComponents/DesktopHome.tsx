import React, { useState } from 'react';

import Sidebar from '../CommonComponents/Sidebar';

import DesktopBannerImg from '../assets/DesktopBannerImg.png';
import FunctionalButton from '../CommonComponents/FunctionalButton';
import Img from '../assets/GenericFoodImg.webp';
import NavbarCardsDesktop from "../CommonComponents/Consts/NavbarCardsDesktop";


const DesktopHome: React.FC = () => {

    return (
        <div className='desktopHome'>
            <Sidebar class='sidebarDesktop' sidebarCards={NavbarCardsDesktop}/>
            <div className='desktopContent'>
                <div className='topHalfContainer'>
                    <img src={DesktopBannerImg} alt='' className='bannerImg' />
                    <h2>Click Get Started To Begin Your Journey to Zero Waste Cooking</h2>
                    <FunctionalButton title='Get Started' whichClass='functionalBtn getStartedBtn' imgSrc='' />
                </div>
                <div className='trendingRecipesCarouselContainer'>
                    <h3>Trending Recipes</h3>
                    <div className="trendingRecipesCarousel">
                        <img src={Img} alt='' />    
                        <img src={Img} alt='' />
                        <img src={Img} alt='' />
                        <img src={Img} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesktopHome;