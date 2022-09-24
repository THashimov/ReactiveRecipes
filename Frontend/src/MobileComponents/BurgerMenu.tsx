import React, { ReactNode, useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md';

import changeSidebarView from '../CommonComponents/ChangeSidebarView';

type T = {
    isSidebarOpen: boolean;
    setSidebarState: React.Dispatch<React.SetStateAction<boolean>>;
}
 
const BurgerMenu: React.FC<T> = (prop) => {
    const [btnToRender, setBtnToRender] = useState<ReactNode>(<HiMenu/>);

    useEffect(() => {
        if (prop.isSidebarOpen) {
            setBtnToRender(<MdOutlineClose onClick={() => {changeSidebarView(prop)}} size={40}/>)
        } else {
            setBtnToRender(<HiMenu onClick={() => {changeSidebarView(prop)}} size={40}/>)
        }
    }, [prop.isSidebarOpen]);

    return (
        <button className="burgerMenu">
            {btnToRender} 
        </button>
      );
}
 
export default BurgerMenu;