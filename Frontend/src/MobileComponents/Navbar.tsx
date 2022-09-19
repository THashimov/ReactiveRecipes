import React, { useEffect, useState } from "react";

import Sidebar from "../CommonComponents/Sidebar";
import BurgerMenu from './BurgerMenu';
import MainLogo from "../CommonComponents/MainLogo";
import NavbarCardsMobile from "../CommonComponents/Consts/NavbarCardsMobile";

interface NavbarProps {
        class: string;
}
 
const Navbar: React.FC<NavbarProps> = (prop) => {
        const [sidebarView, setSidebarState] = useState<boolean>(false);
        const [sidebarAnim, setSidebarAnim] = useState<string>('sidebarMobile hidden');
    
        useEffect(() => {
          sidebarView ? setSidebarAnim('sidebarMobile showing') : setSidebarAnim('sidebarMobile hidden');
        }, [sidebarView]);


    return (
        <div className="navbar">
                <Sidebar class={sidebarAnim} sidebarCards={NavbarCardsMobile}/>
                <BurgerMenu isSidebarOpen={sidebarView} setSidebarState={setSidebarState}/>
                <MainLogo class={prop.class} />
        </div>
        );
}
 
export default Navbar;