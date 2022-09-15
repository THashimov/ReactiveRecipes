import React from "react";
import { Link } from "react-router-dom";

import MainLogo from "../CommonComponents/MainLogo";
import SidebarCards from "./Classes/SidebarCards";
import FunctionalButton from "./FunctionalButton";
import GenerateCardsContainer from "./GenerateCardsContainers";

interface SidebarProps {
    class: string;
    sidebarCards: SidebarCards [];
}
 
const Sidebar: React.FC<SidebarProps> = (prop) => {
    let containers: JSX.Element [] = [];

    for (let i = 0; i < prop.sidebarCards.length; i++) {
        prop.sidebarCards[i].generatePaths();
        containers.push(<GenerateCardsContainer cardsData={prop.sidebarCards[i]} key={i}/>);
    }

    return (
        <div className={prop.class}>
            <MainLogo class='sidebarLogo'/>
            <FunctionalButton title='Register / Log In' whichClass='functionalBtn registerBtn' imgSrc={null}/>
            {containers}
            <Link className="aboutUs" to={'/aboutus'}>About Us</Link>
        </div>
        );
}
 
export default Sidebar;