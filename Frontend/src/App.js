import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import React, { useEffect, useState } from "react";

import MobileHome from './MobileComponents/MobileHome';
import DesktopHome from './DesktopComponents/DesktopHome';
import RegisterPage from './CommonComponents/RegisterPage';
import SavedRecipesPage from './CommonComponents/SavedRecipesPage';
import BrowseRecipesPageMobile from './MobileComponents/BrowseRecipesPageMobile';



import './MobileComponents/MobileCss/MobileHome.css';
import './MobileComponents/MobileCss/BrowseRecipesMobile.css';
import './DesktopComponents/Desktopcss/DesktopHome.css';
import './CommonCss/Global.css';
import './CommonCss/Sidebar.css';
import './CommonCss/Register.css';
import ConnectWithEmail from './CommonComponents/ConnectWithEmail';



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
            element = {<BrowseRecipesPageMobile />}>
          </Route>
          <Route path = '/connectwithemail'
            element = {<ConnectWithEmail />}>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
