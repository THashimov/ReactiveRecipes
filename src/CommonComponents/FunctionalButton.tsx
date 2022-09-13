import React from "react";
import { Link } from "react-router-dom";

type T = {
    title: string;
    id: string;
    imgSrc: string | null;
};

const FunctionalButton: React.FC<T> = ({title, id, imgSrc}) => {
    const path = title.replace(/\s|\//g, '').toLowerCase();

    return (
        <Link to={'/' + path} id={id}>
          {imgSrc && <img src={imgSrc} alt="" />}
            {title}
        </Link>
      );
}

export default FunctionalButton;