import React from "react";
import { Link } from "react-router-dom";
import SidebarCards from "./Classes/SidebarCards";

type T = {
    cardsData: SidebarCards;
}
 
const GenerateCardsContainer: React.FC<T> = (prop) => {
    let className = prop.cardsData.title.replace(/\s|\//g, '');
    className = className.charAt(0).toLowerCase() + className.slice(1);
    className += 'Container';

    let links: JSX.Element [] = [];

    for (let i = 0; i < prop.cardsData.linkTitles.length; i++) {
        let elem = <Link to={prop.cardsData.linkPaths[i]} key={i}> {prop.cardsData.linkTitles[i]} </Link>
        links.push(elem);
    }

    return ( 
        <div className={className}>
            <p>{prop.cardsData.title}</p>
            {links}
        </div> 
    );
}
 
export default GenerateCardsContainer;