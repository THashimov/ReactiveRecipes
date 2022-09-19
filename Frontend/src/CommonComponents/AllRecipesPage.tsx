import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const g = async () : Promise<Response>  => {
    const x = await fetch('')
    const data = await x.json();
    console.log(data.saved_recipes);
    return x
}

interface AllRecipesPageProps {
    
}
 
const AllRecipesPage: React.FC<AllRecipesPageProps> = () => {
    let res = g();
    return ( <div>
        <p>hello</p>
    </div> );
}
 
export default AllRecipesPage;