import React from "react";

type T = {
    title: string;
    whichClass: string;
};

const FunctionalButton: React.FC<T> = ({title, whichClass}) => {
    const postRequest = () => {
        
    }

    return (
        <button className={whichClass} onClick={postRequest}>
            {title}
        </button>
      );
}

export default FunctionalButton;