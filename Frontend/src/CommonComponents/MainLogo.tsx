import React from "react";
import { Link } from "react-router-dom";

type T = {
    class: string;
}
 
const MainLogo: React.FC<T> = (prop) => {
    return (
        <Link className={prop.class} to='/'>
            <img src='images/Logo.svg' alt="" />
        </Link>
      );
}
 
export default MainLogo;