import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "./context/LoginSignOut";
import {GrClose} from "react-icons/gr"
const WishList = () => {
    const{wishlist,removeItem,addToBag}=useContext(LoginContext);
    
    return wishlist.length ? ( 
        <div className="mens-joggers">
      <h2>WishList</h2>
      <div className="joggers">
        {wishlist.map((data,index) => (
          <div className="wishlist" key={index}>
             <i onClick={() => removeItem(data.id)}><GrClose size={24} style={{marginTop:"8px"}}/></i> 
             <Link to={`/product/${data.id}`}> 
            <img src={data.imgurl} alt="product-img"></img>
            </Link>
            <h3>{data.name}</h3>
            <b>₹{data.price}</b>
            <button onClick={()=>addToBag(data)} >Move To Bag</button>
          </div>
        ))}
      </div>
    </div>
     ):(
        <div className="empty">
        <img src="https://images.bewakoof.com/web/group-3x-1509961969.png" alt="wislist"/>
        <h2> Hey! Your Wishlist is empty</h2>
        <Link to="/"><button>Continue Shopping</button></Link>
      </div>
     );
}
 
export default WishList;
