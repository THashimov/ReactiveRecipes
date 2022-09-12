import React from "react";
import { Link } from "react-router-dom";

type T = {
    title: string;
    id: string;
};

const FunctionalButton: React.FC<T> = ({title, id}) => {
    const path: string = title.replace(/\s/g, '').toLowerCase();
    return (
        <Link to={'/' + path} id={id}>
            {title}
        </Link>
      );
}

export default FunctionalButton;