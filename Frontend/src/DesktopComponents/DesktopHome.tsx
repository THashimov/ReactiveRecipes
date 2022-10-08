import React, { useState } from 'react';

import Sidebar from '../CommonComponents/Sidebar';
import Carousel from '../CommonComponents/Carousel'
import FunctionalButton from '../CommonComponents/LinkButton';
import NavbarCardsDesktop from "../CommonComponents/Consts/NavbarCardsDesktop";


const DesktopHome: React.FC = () => {
    // Will need to fetch these from the server in future
    // The recipe class has a rating and a howManyRatings field now
    // Perhaps a method which converts the data in the class into this format
    const items = {
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
        };
    

    return (
        <div className='desktopHome'>
            <Sidebar class='sidebarDesktop' sidebarCards={NavbarCardsDesktop}/>
            <div className='desktopContent'>
                <div className='topHalfContainer'>
                    <img src='images/DesktopBannerImg.png' alt='' className='bannerImg' />
                    <h2>Click Get Started To Begin Your Journey to Zero Waste Cooking</h2>
                    <FunctionalButton title='Get Started' whichClass='functionalBtn getStartedBtn' imgSrc='' />
                </div>
                {/* Moved items to their own cost as a placeholder for now. We will need to get these from a fetch in future so moved to make it stand out */}
                <Carousel {...items} />
            </div>
        </div>
    );
    
}


export default DesktopHome;