import { useContext ,useState} from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "./context/LoginSignOut";
import Modal from "./Modal";

const AddToBag = () => {
  const { bagItems,removeBagItem,wishlist,addToWishlist } = useContext(LoginContext);
  const [modalOpen, setModalOpen] = useState(false);
  const totalPrice=bagItems.reduce((a, v) => (a = a + v.price), 0);
  return bagItems.length ? (
    <div className="cart-items">
      <h4>
        My Bag <span>{bagItems.length} item</span>
      </h4>
      <div className="bag-itemsandprice">
        <div className="bagitems">
          {bagItems.map((data, index) => (
            <div className="bagitems-align" key={index}>
              <div className="bagitems-display">
                <div className="bagitem-left">
                  <span>{data.name}</span>
                  <b>₹{data.price}</b>
                </div>
                <div className="bagitems-right">
                  <Link to={`/product/${data.id}`}>
                    <img src={data.imgurl} alt="product-img"></img>
                  </Link>
                </div>
              </div>
              <div className="bagbuttons">
                <button className="bagremove" onClick={()=>removeBagItem(data.id)} >Remove</button>
                {wishlist.find(wl=>wl.id==data.id)?(""):
                (<button onClick={() => addToWishlist(data)} className="bagwishlist">Move To Wishlist</button>)}
              </div>
            </div>
          ))}
        </div>
        <div className="bagpricegrid">
        <div className="bagprice">
          <h3>Price Summary</h3>
          <div className="totalprice">
            <p>Total MRP (Incl. of taxes) </p>
            <p>₹{totalPrice}</p>
          </div>
          <div className="delivery">
            <p>Delivery Fee</p>
            <p>Free</p>
          </div>
          <div className="subtotal">
            <p>Subtotal </p>
            <p>₹{totalPrice}</p>
          </div>
        </div>
        <div className="totalbutton">
            <div className="total">
              <span>Total </span>
              <p>₹{bagItems.reduce((a, v) => (a = a + v.price), 0)}</p>
            </div>
            <div className="tbutton">
            <button onClick={() => {
          setModalOpen(true);
        }}>Add Address</button>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="empty">
      <img
        src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
        alt="addtobag"
      />
      <h2> Nothing in the bag</h2>
      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default AddToBag;
