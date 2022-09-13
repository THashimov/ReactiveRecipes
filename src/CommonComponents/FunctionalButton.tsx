import React from "react";
import { Link } from "react-router-dom";

type T = {
    title: string;
    id: string;
};

const FunctionalButton: React.FC<T> = ({title, id}) => {
    const specialChars: RegExp = /\W|_/g;
    let path: string = '';
    if (title.match(specialChars)) {
      let i: number = 0;
      // Weird typescript error. Not totally sure why this happens
      while (title[i] !== specialChars && title[i] != ' ') {
        path += title[i].toLowerCase();
        i++;
      }
    } else {
      path = '/' + title.replace(/\s/g, '').toLowerCase();
    }

    return (
        <Link to={'/' + path} id={id}>
            {title}
        </Link>
      );
}

export default FunctionalButton;