import React from "react";
import { Link } from "react-router-dom";

type T = {
    title: string;
};

const FunctionalButton: React.FC<T> = ({title}) => {
    return (
        <Link to={'/' + title}>
            {title}
        </Link>
      );
}

export default FunctionalButton;