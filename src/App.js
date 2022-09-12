import { BrowserRouter, Routes, Route} from 'react-router-dom';

import {isMobile} from 'react-device-detect';
import React, { useEffect, useState } from "react";

import MobileHome from './MobileComponents/MobileHome';
import DesktopHome from './DesktopComponents/DesktopHome';

import './MobileComponents/MobileCss/MobileHome.css';
import './CommonCss/Global.css';

function App() {
  const [homeType, setHomeType] = useState();

  useEffect(() => {
    isMobile ? setHomeType(<MobileHome />) : setHomeType(<DesktopHome />);
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' 
          element = {homeType}>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
