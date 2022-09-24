import React, { useEffect, useState } from "react";

import Sidebar from "../CommonComponents/Sidebar";
import BurgerMenu from './BurgerMenu';
import MainLogo from "../CommonComponents/MainLogo";
import NavbarCardsMobile from "../CommonComponents/Consts/NavbarCardsMobile";

type T = {
        class: string;
}
 
const Navbar: React.FC<T> = (prop) => {
        const [sidebarView, setSidebarState] = useState<boolean>(false);
        const [sidebarAnim, setSidebarAnim] = useState<string>('sidebarMobile hidden');
        const [navbarFixed, setNavbarFixed] = useState<string>('');

        useEffect(() => {
          sidebarView ? setSidebarAnim('sidebarMobile showing') : setSidebarAnim('sidebarMobile hidden');
        }, [sidebarView]);

        useEffect(() => {
                prop.class === 'navbarLogoBrowse' ? setNavbarFixed('navbar fixed') : setNavbarFixed('navbar');
        });

    return (
        <div className={navbarFixed}>
                <Sidebar class={sidebarAnim} sidebarCards={NavbarCardsMobile}/>
                <BurgerMenu isSidebarOpen={sidebarView} setSidebarState={setSidebarState}/>
                <MainLogo class={prop.class} />
        </div>
        );
}
 
export default Navbar;