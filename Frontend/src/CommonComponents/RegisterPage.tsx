import React from "react";
import MainLogo from './MainLogo';
import Apple from '../assets/apple.png';
import Email from '../assets/email.png';
import Facebook from '../assets/facebook.png';
import Google from '../assets/google.png';

import FunctionalButton from "./FunctionalButton";

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
            <FunctionalButton title='Connect With Facebook' whichClass='functionalBtn facebookBtn' imgSrc={Facebook}/>
            <FunctionalButton title='Connect With Google' whichClass='functionalBtn googleBtn' imgSrc={Google}/>
            <FunctionalButton title='Connect With Apple' whichClass='functionalBtn appleBtn' imgSrc={Apple}/>
            <FunctionalButton title='Connect With Email' whichClass='functionalBtn emailBtn' imgSrc={Email}/>
            </div>
        </div>
        );
}

export default RegisterPage;