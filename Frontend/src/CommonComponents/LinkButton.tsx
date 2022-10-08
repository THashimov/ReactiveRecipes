import React from "react";
import { Link } from "react-router-dom";

type T = {
    title: string;
    whichClass: string;
    imgSrc: string | null;
};

const LinkButton: React.FC<T> = ({title, whichClass, imgSrc}) => {
    const path = title.replace(/\s|\//g, '').toLowerCase();
  
    return (
        <Link to={'/' + path} className={whichClass}>
          {imgSrc && <img src={imgSrc} alt="" />}
            {title}
        </Link>
      );
}

export default LinkButton;