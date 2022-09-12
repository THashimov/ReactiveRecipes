import {HiMenu} from 'react-icons/hi'

interface BurgerMenuProps {
    
}
 
const BurgerMenu: React.FC<BurgerMenuProps> = () => {
    return (
        <button className="burgerMenu">
            <HiMenu size={60}/>
        </button>
      );
}
 
export default BurgerMenu;