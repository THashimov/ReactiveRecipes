import { Link } from "react-router-dom";

import Logo from '../assets/Logo.svg';

interface MainLogoProps {
    
}
 
const MainLogo: React.FC<MainLogoProps> = () => {
    return (
        <Link className='mainLogo' to='/'>
            <img src={Logo} alt="" />
        </Link>
      );
}
 
export default MainLogo;