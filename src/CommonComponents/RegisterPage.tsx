import React from "react";
import FunctionalButton from "./FunctionalButton";
import MainLogo from "./MainLogo";

interface RegisterPageProps {
    
}
 
const RegisterPage: React.FC<RegisterPageProps> = () => {
    return (
        <div className="registerPage">
            <MainLogo class='mobileHomeLogo'/>
            <h2>Exciting Recipes Are Waiting</h2>
            <p>Connect Now And Customise Your Life</p>
            <div className="loginBtnsContainer">
            <FunctionalButton title='Connect With Facebook' id='facebookBtn'/>
            <FunctionalButton title='Connect With Google' id='googleBtn'/>
            <FunctionalButton title='Connect With Apple' id='appleBtn'/>
            <FunctionalButton title='Connect With Email' id='emailBtn'/>
            </div>
        </div>
        );
}
 
export default RegisterPage;