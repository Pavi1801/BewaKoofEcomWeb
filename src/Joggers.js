import { useContext } from 'react';
import {FaRegHeart,FaHeart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LoginContext } from './context/LoginSignOut';
import data from "./data/joggers.json";
const Joggers = () => {
    const{wishlist, addToWishlist} =useContext(LoginContext);
  return (
    <div className="mens-joggers">
      <h1>Track Pants & Joggers for Men</h1>
      <div className="joggers">
        {data.map((data) => (
          <div className="jog-lists" key={data.id}>
              <i onClick={() => addToWishlist(data)} >
             {wishlist.find(wl=>wl.id==data.id)?
                (<FaHeart  size={24} style={{marginTop:"10px"}} color="rgb(251, 210, 73)" />):
                ( <FaRegHeart  size={24} style={{marginTop:"10px"}} />)}</i> 
              <Link to={`/product/${data.id}`}> 
                        <img src={data.imgurl} alt="product-img"></img>
            <h3>{data.name}</h3>
            <b>₹{data.price}</b>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Joggers;
