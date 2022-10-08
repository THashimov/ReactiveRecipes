import React from "react";
import MainLogo from './MainLogo';

import FunctionalButton from "./LinkButton";

type T = {
    whichClass: string;
}
 
const RegisterPage: React.FC<T> = (prop) => {

    return (
        <div className={prop.whichClass}>
            <MainLogo class='registerPageLogo'/>
            <div className="registerPageTextContainer">
                <h2>Exciting Recipes Are Waiting</h2>
                <p>Connect Now And Customise Your Life</p>
            </div>
            <div className="loginBtnsContainer">
            <FunctionalButton title='Connect With Facebook' whichClass='functionalBtn facebookBtn' imgSrc='images/facebook.png'/>
            <FunctionalButton title='Connect With Google' whichClass='functionalBtn googleBtn' imgSrc='images/google.png'/>
            <FunctionalButton title='Connect With Apple' whichClass='functionalBtn appleBtn' imgSrc='images/apple.png'/>
            <FunctionalButton title='Connect With Email' whichClass='functionalBtn emailBtn' imgSrc='images/email.png'/>
            </div>
        </div>
        );
}

export default RegisterPage;