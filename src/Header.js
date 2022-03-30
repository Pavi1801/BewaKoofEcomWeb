import { FiSearch } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { useContext,useState ,useLayoutEffect} from "react";
import { LoginContext } from "./context/LoginSignOut";
import { Link } from "react-router-dom";
import Search from "./SearchBar";


const Header = () => {
  const { wishlist, bagItems } = useContext(LoginContext);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  
  function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  const isMobile = useWindowSize();
  console.log(isMobile);
   
  return (
    <header className="main-header">
      <div className="main-header-left">
        <Link to="/">
          <img
            src="https://images.bewakoof.com/web/bewakoof-primary-logo-white-bg-2x-1635745564.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="main-header-right">
        {isMobile>=600 ?(
             <div className="search">
             <i>
               <FiSearch className="fisearch" />
             </i>
             <input class="input-field" placeholder="Search" type="text"></input>
           </div>
        ):(
          <div className="search">
          <FiSearch className="fisearch" onClick={()=>setSearchBarOpen(true)}/>
          {searchBarOpen &&<Search setOpenSearchBar={setSearchBarOpen}/>}
          </div>
        )}
             
        <div className="header-login">
          <Link to="/login">
            <BsFillPersonFill />
            <h4>Login</h4>
          </Link>
        </div>
        <div className="header-whishlist">
          <Link to="/wishlist">
            {wishlist.length === 0 ? (
              <FaRegHeart className="faheart" color="rgba(0,0,0,.5)" />
            ) : (
              <FaHeart className="faheart" color="#fbd249" />
            )}
          </Link>
        </div>
        <div className="header-addtocart">
          <Link to="/addtobag">
            <FaShoppingCart className="facart" color="rgba(0,0,0,.5)" />
            {bagItems.length > 0 ? <span>{bagItems.length}</span> : ""}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
