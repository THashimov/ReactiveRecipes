import React, { useEffect, useState } from "react";

import SidebarCards from "../CommonComponents/Classes/SidebarCards";
import Sidebar from "../CommonComponents/Sidebar";
import BurgerMenu from './BurgerMenu';
import MainLogo from "../CommonComponents/MainLogo";

interface NavbarProps {
        class: string;
        sidebarFeed: SidebarCards;
        sidebarMyRecipes: SidebarCards;
}
 
const Navbar: React.FC<NavbarProps> = (prop) => {
        const [sidebarView, setSidebarState] = useState<boolean>(false);
        const [sidebarAnim, setSidebarAnim] = useState<string>('sidebarMobile hidden');
    
        useEffect(() => {
          sidebarView ? setSidebarAnim('sidebarMobile showing') : setSidebarAnim('sidebarMobile hidden');
        }, [sidebarView]);


    return (
        <div className="navbar">
                <Sidebar class={sidebarAnim} sidebarCards={[prop.sidebarFeed, prop.sidebarMyRecipes]}/>
                <BurgerMenu isSidebarOpen={sidebarView} setSidebarState={setSidebarState}/>
                <MainLogo class={prop.class} />
        </div>
        );
}
 
export default Navbar;