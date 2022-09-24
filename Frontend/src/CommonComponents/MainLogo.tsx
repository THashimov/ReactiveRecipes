import React from "react";
import { Link } from "react-router-dom";

import Logo from '../assets/Logo.svg';


type T = {
    class: string;
}
 
const MainLogo: React.FC<T> = (prop) => {
    return (
        <Link className={prop.class} to='/'>
            <img src={Logo} alt="" />
        </Link>
      );
}
 
export default MainLogo;