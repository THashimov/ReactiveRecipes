import React from "react";
import { useState } from "react";
import MainLogo from "./MainLogo";

import RequestButton from './RequestButton';

interface ConnectWithEmailProps {
}
 
const ConnectWithEmail: React.FC<ConnectWithEmailProps> = () => {
    const [email, setEmail] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');


    return ( 
            <div className="formContainer">
            <MainLogo class='registerPageLogo' />
                <form id='connectWithEmailForm'>
                    <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type='text' placeholder='Password' value={pwd} onChange={(e) => setPwd(e.target.value)}/>
                    <RequestButton title='Log In / Register' whichClass='functionalBtn registerBtn' recipe={null} />
                </form>
            </div>
     );
}
 
export default ConnectWithEmail;