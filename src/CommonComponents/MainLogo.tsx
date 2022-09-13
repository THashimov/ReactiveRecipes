import React from "react";
import { Link } from "react-router-dom";

import Logo from '../assets/Logo.svg';


interface MainLogoProps {
    class: string;
}
 
const MainLogo: React.FC<MainLogoProps> = (prop) => {
    return (
        <Link className={prop.class} to='/'>
            <img src={Logo} alt="" />
        </Link>
      );
}
 
export default MainLogo;