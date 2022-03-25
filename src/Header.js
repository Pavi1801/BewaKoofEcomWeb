import { FiSearch } from 'react-icons/fi';
import { BsFillPersonFill} from 'react-icons/bs'
import {FaHeart,FaRegHeart,FaShoppingCart} from 'react-icons/fa'
import { useContext } from 'react';
import { LoginContext } from './context/LoginSignOut';
import { Link } from 'react-router-dom';

const Header = () => {
    const {wishlist,bagItems}=useContext(LoginContext);
    return ( 
        <header className="main-header">
         <div className="main-header-left">
         <Link to="/"> 
        <img  src="https://images.bewakoof.com/web/bewakoof-primary-logo-white-bg-2x-1635745564.png" alt="logo"/>
        </Link>
        </div>  
        <div className='main-header-right'>
        <div className="search">
             <i ><FiSearch size={20}  /></i>
            <input class="input-field" placeholder='Search' type="text"></input>
        </div> 
        <div className='header-login'>
            <Link to="/login">
           <BsFillPersonFill/>
           <h4>Login</h4>
           </Link>
        </div>
        <div className='header-whishlist'>
            <Link to="/wishlist">
            {wishlist.length === 0 ? <FaRegHeart size={32} color="rgba(0,0,0,.5)"/> : <FaHeart size={32} color="#fbd249"/>} 
            </Link>
        </div>
        <div className='header-addtocart'>
            <Link to="/addtobag">
            <FaShoppingCart size={32} color="rgba(0,0,0,.5)" />
            {bagItems.length > 0 ? <span>{bagItems.length}</span>:""}
            </Link>
        </div>
        </div>
        </header>
     );
}
 
export default Header;