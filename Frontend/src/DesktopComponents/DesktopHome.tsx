import React, { useState } from 'react';

import Sidebar from '../CommonComponents/Sidebar';
import Carousel from '../CommonComponents/Carousel'
import FunctionalButton from '../CommonComponents/FunctionalButton';
import NavbarCardsDesktop from "../CommonComponents/Consts/NavbarCardsDesktop";


const DesktopHome: React.FC = () => {

    return (
        <div className='desktopHome'>
            <Sidebar class='sidebarDesktop' sidebarCards={NavbarCardsDesktop}/>
            <div className='desktopContent'>
                <div className='topHalfContainer'>
                    <img src='images/DesktopBannerImg.png' alt='' className='bannerImg' />
                    <h2>Click Get Started To Begin Your Journey to Zero Waste Cooking</h2>
                    <FunctionalButton title='Get Started' whichClass='functionalBtn getStartedBtn' imgSrc='' />
                </div>
                <Carousel {...{
                    title: 'Trending Recipes',
                    items: [{
                        image: 'GenericFoodImg.webp',
                        title: 'Tasty food',
                        solidCount: 3,
                        regularCount: 2,
                        rating: 382
                    }, {
                        image: 'GenericFoodImg.webp',
                        title: 'Super bland food',
                        solidCount: 1,
                        regularCount: 4,
                        rating: 383
                    }, {
                        image: 'GenericFoodImg.webp',
                        title: 'Super tasty food',
                        solidCount: 5,
                        regularCount: 0,
                        rating: 384
                    }, {
                        image: 'GenericFoodImg.webp',
                        title: 'Super tasty food',
                        solidCount: 4,
                        regularCount: 1,
                        rating: 385
                    },{
                        image: 'GenericFoodImg.webp',
                        title: 'Super tasty food',
                        solidCount: 0,
                        regularCount: 5,
                        rating: 386
                    }] 
                }} />
            </div>
        </div>
    );
}

export default DesktopHome;