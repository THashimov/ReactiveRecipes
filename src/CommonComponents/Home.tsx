import React, { useState } from "react";
import { useEffect } from "react";
import {isMobile} from 'react-device-detect';
import FunctionalButton from "./FunctionalButton";

const Home: React.FC = () => {
    const [homeClass, setHomeClass] = useState<string>('');

    useEffect(() => {
        isMobile ? setHomeClass('home mobile') : setHomeClass('home desktop');
    }, [])

    return (
        <div className={homeClass}>
            <FunctionalButton title={'words'}/>
        </div>
    );
}

export default Home;