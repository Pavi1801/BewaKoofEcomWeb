import { Link } from "react-router-dom";
import data from "./data/products.json";
const Popular = () => {
    return ( 
        <div className="popular-list">
            <h1><span color="yellow">*</span>POPULAR CATEGORIES<span color="yellow">*</span></h1>
        <div className="products">
        {data.map((data) => (
          <div className="lists" key={data.id}>
            <Link to="/joggers">
            <img src={data.imgUrl} alt="product-img"></img>
            </Link>
          </div>
        ))}
      </div>
      </div>
     );
}
 
export default Popular;