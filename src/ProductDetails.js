import { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { LoginContext } from "./context/LoginSignOut";
import {FaRegHeart,FaHeart} from 'react-icons/fa';
import data from "./data/joggers.json";
const ProductDetails = () => {
  const { id } = useParams();
  const{wishlist,addToWishlist,addToBag}=useContext(LoginContext);
  
  return (
    <div className="product-details">
      {data.map((product) => {
        if (product.id == id) {
          return (
            <article className="product-detail" key={product.id}>
               <div className="left-side">
              <img src={product.imgurl} alt="product-img"></img>
              </div> 
              <div className="right-side">
              <Link to="/"><h1>BEWAKOOF</h1> </Link>  
              <h3>{product.name}</h3>
              <h2>₹{product.price}</h2>
              <h4>Product Description:</h4><p>{product.body}</p>
              <div className="buttons">
                  <button className="left" onClick={() => addToWishlist(product)}>{wishlist.find(wl=>wl.id==product.id)?
                (<FaHeart  size={24} style={{margin:"10px" , marginTop:"12px"}} color="rgb(251, 210, 73)" />):
                ( <FaRegHeart  size={24} style={{margin:"10px", marginTop:"12px"}} />)}</button>
                <button className="right" onClick={()=>addToBag(product)}>ADD TO BAG</button></div>
              </div>
            </article>
          );
        }
      })}
    </div>
  );
};

export default ProductDetails;