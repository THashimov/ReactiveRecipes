import MainLogo from "../CommonComponents/MainLogo";
import ZeroWasteImg from '../assets/ZeroWaste.jpg';

import BurgerMenu from "./BurgerMenu";
import FunctionalButton from '../CommonComponents/FunctionalButton';


const MobileHome: React.FC = () => {

    return (
      <div className='mobileHome'>
          <BurgerMenu />
          <MainLogo />
          <h1>Welcome To Reactive Recipes</h1>
          <h2>Let Us Help You Reduce Food Wastse</h2>
          <FunctionalButton title={'Get Started'} id={'getStartedBtn'}/>
          <img src={ZeroWasteImg} alt="" className='zeroWasteImg' />
      </div>
    )
} 

export default MobileHome;