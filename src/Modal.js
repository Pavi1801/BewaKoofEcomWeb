import { useContext } from "react";
import { LoginContext } from "./context/LoginSignOut";

const Modal = ({ setOpenModal }) => {
  const { username, phoneNumber } = useContext(LoginContext);
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
            <input type="name" required value={username} />
            <label className="number-label">Mobile Number</label>
            <input
              type="tel"
              maxLength={10}
              required
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              value={phoneNumber}
            />
            <div className="display-border">{""}</div>
            <input
              type="pincode"
              maxLength={6}
              placeholder="Pincode"
              required
              pattern="[0-9]{6}"
            />
            <div className="state-input">
              <input
                className="city-ip"
                type="text"
                placeholder="City"
                maxLength={20}
                required
              />
              <input
                className="state-ip"
                type="text"
                placeholder="State"
                maxLength={30}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Flat no/Building,Street name"
              maxLength={60}
              required
            />
            <input
              type="text"
              placeholder="Area/Locality"
              maxLength={60}
              required
            />
            <input type="text" placeholder="Landmark(option)" maxLength={60} />
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
