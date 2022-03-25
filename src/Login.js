import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "./context/LoginSignOut";

const Login = () => {
  const { phoneNumber,setPhoneNumber}=useContext(LoginContext);
    return ( 
        <div className="signUp-form">
        <div className="signup-form-left">
          <h1>Welcome to the world of Bewakoof!</h1>
          <img src="https://images.bewakoof.com/web/group-19-1617704502.png" alt="signup-logo"/>
        </div>
        <div className="signup-form-right"> 
       <form>
       <h2>Log in/Sign Up</h2>
       <p>for Latest trends, exciting offers and everything Bewakoof!</p> 
           <input type ="tel" placeholder="Enter Mobile Number" maxLength={10}
            pattern="[0-9]{10}" required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            />
           <Link to="/signup"><button>Continue</button></Link>
       </form>
       </div>
       </div>
     );
}
 
export default Login;