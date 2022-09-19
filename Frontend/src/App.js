import { BrowserRouter, Routes, Route} from 'react-router-dom';

import {isMobile} from 'react-device-detect';
import React, { useEffect, useState } from "react";

import MobileHome from './MobileComponents/MobileHome';
import DesktopHome from './DesktopComponents/DesktopHome';
import RegisterPage from './CommonComponents/RegisterPage';
import SavedRecipesPage from './CommonComponents/SavedRecipesPage';
import BrowseRecipesPage from './CommonComponents/BrowseRecipesPage';



import './MobileComponents/MobileCss/MobileHome.css';
import './DesktopComponents/Desktopcss/DesktopHome.css';
import './CommonCss/Global.css';
import './CommonCss/Sidebar.css';
import './CommonCss/Register.css';



function App() {
  const [homeType, setHomeType] = useState();
  const [whichClass, setWhichClass] = useState();

  useEffect(() => {
    if (isMobile && window.innerWidth <= 480) {
      setHomeType(<MobileHome />);
      setWhichClass('registerPageMobile')
    } else {
      setHomeType(<DesktopHome />);
      setWhichClass('registerPageDesktop');
    }
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' 
          element = {homeType}>
          </Route>
          <Route path = '/registerlogin'
            element = {<RegisterPage whichClass={whichClass}/>}>
          </Route>
          <Route path = '/recipes/my-recipes/all-recipes'
            element = {<SavedRecipesPage />}>
          </Route>
          <Route path = '/recipes/browse-recipes'
            element = {<BrowseRecipesPage />}>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;