import React from "react";
import { useState } from "react";
import { useEffect } from "react";

interface AllRecipesPageProps {
    
}
 
const AllRecipesPage: React.FC<AllRecipesPageProps> = () => {
    useEffect(() => {
        fetch('')
        .then(response => console.log(response))
        .then(data => console.log(data))
    })
    return ( <div>
        <p>hello</p>
    </div> );
}
 
export default AllRecipesPage;