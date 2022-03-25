import React, { createContext, useState } from "react";

export const LoginContext = createContext();
const LoginContextProvider = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const [conPass, setConPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [bagItems,setBagItems]=useState([]);
  const [clickStatus,setClickStatus]=useState(false);
  function removeItem(id) {
    let newWishlist = wishlist.filter((row) => row.id !== id);
    setWishlist(newWishlist);
  }
  function removeBagItem(id){
      setBagItems(bagItems.filter((row)=> row.id !==id));
  }
  function addToWishlist(data) {
    if(clickStatus===false){
        setWishlist([...wishlist, data]);
        setClickStatus(true);
    }
    else{
        removeItem(data.id);
        setClickStatus(false);
    }
  }
  function addToBag(data){
    setBagItems([...bagItems,data]);
    console.log(bagItems);
 }
  return (
    <LoginContext.Provider
      value={{
        phoneNumber,
        setPhoneNumber,
        email,
        setEmail,
        username,
        setUsername,
        pass,
        setPassword,
        conPass,
        setConPassword,
        wishlist,
        addToWishlist,
        bagItems,
        addToBag,
        removeItem,
        removeBagItem
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
