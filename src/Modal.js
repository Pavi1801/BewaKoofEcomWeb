import { useContext } from "react";
import { LoginContext } from "./context/LoginSignOut";

const Modal = ({ setOpenModal }) => {
  const { username, phoneNumber,setUsername,setPhoneNumber} = useContext(LoginContext);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h5>Add New Address</h5>
        </div>
        <div className="address-form">
          <form>
            <label className="name-label"> Full Name</label>
            <input type="name" required value={username} 
            onChange={(e) => setUsername(e.target.value)}/>
            <label className="number-label">Mobile Number</label>
            <input
              type="tel"
              maxLength={10}
              required
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className="display-border">{""}</div>
            <label className="pincode-label">Pincode</label>
            <input
              type="pincode"
              maxLength={6}
              required
              pattern="[0-9]{6}"
            />
            <div className="state-input">
            <label className="city-label">City</label> 
              <input
                className="city-ip"
                type="text"
                maxLength={20}
                required
              />
                <label className="state-label">State</label>
              <input
                className="state-ip"
                type="text"
                maxLength={30}
                required
              />
            </div>
            <label className="flat-label">Flat no/Building,Street name</label> 
            <input
              type="text"
              maxLength={60}
              required
            />
             <label className="area-label">Area/Locality</label>
            <input
              type="text"
              maxLength={60}
              required
            />
            <label className="landmark-label">Landmark(option)</label>
            <input type="text" maxLength={60} />
            <div className="footer">
          <button>Save Address</button>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
