import React from "react";
import MainLogo from './MainLogo';
import Apple from '../assets/apple.png';
import Email from '../assets/email.png';
import Facebook from '../assets/facebook.png';
import Google from '../assets/google.png';



import FunctionalButton from "./FunctionalButton";

interface RegisterPageProps {
    
}
 
const RegisterPage: React.FC<RegisterPageProps> = () => {
    return (
        <div className="registerPage">
            <MainLogo class='registerPageLogo'/>
            <div className="registerPageTextContainer">
                <h2>Exciting Recipes Are Waiting</h2>
                <p>Connect Now And Customise Your Life</p>
            </div>
            <div className="loginBtnsContainer">
            <FunctionalButton title='Connect With Facebook' id='facebookBtn' imgSrc={Facebook}/>
            <FunctionalButton title='Connect With Google' id='googleBtn' imgSrc={Google}/>
            <FunctionalButton title='Connect With Apple' id='appleBtn' imgSrc={Apple}/>
            <FunctionalButton title='Connect With Email' id='emailBtn' imgSrc={Email}/>
            </div>
        </div>
        );
}

export default RegisterPage;