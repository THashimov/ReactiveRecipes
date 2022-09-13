import React, { useEffect, useState } from 'react';
import {HiMenu} from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md';

import changeSidebarView from '../CommonComponents/ChangeSidebarView';

interface BurgerMenuProps {
    isSidebarOpen: boolean;
    setSidebarState: React.Dispatch<React.SetStateAction<boolean>>;
}
 
const BurgerMenu: React.FC<BurgerMenuProps> = (prop) => {
    const [closeBtnClass, setCloseBtnClass] = useState<string>('sidebarCloseBtn hidden');

    useEffect(() => {
        prop.isSidebarOpen ? setCloseBtnClass('sidebarCloseBtn showing') : setCloseBtnClass('sidebarCloseBtn hidden');
    }, [prop.isSidebarOpen]);

    return (
        <button className="burgerMenu">
            <HiMenu onClick={() =>{changeSidebarView(prop)}} size={60}/>
            <MdOutlineClose onClick={() => {changeSidebarView(prop)}} className={closeBtnClass} size={40}/>
        </button>
      );
}
 
export default BurgerMenu;