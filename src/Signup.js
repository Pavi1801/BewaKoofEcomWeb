import { useContext} from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "./context/LoginSignOut";

const SignUp = () => {
  const history=useHistory();
    const {email,setEmail}=useContext(LoginContext)
    const {username,setUsername}=useContext(LoginContext);
    const {pass,setPassword}=useContext(LoginContext);
    const {conPass,setConPassword}=useContext(LoginContext);
  const handleSignupSubmit = (e) => {
    e.preventDefault(); 
    if (pass!==conPass) {
       alert("Password Doesn't match");
    } else {
        history.push("/");
    }   
}
    return ( 
        <div className="signUp-form">
         <div className="signup-form-left">
           <h1>Welcome to the world of Bewakoof!</h1>
           <img src="https://images.bewakoof.com/web/group-19-1617704502.png" alt="signup-logo"/>
         </div>
         <div className="signup-form-right"> 
        <form onSubmit={handleSignupSubmit}>
        <h2>SignUp</h2>
        <p>Hi new buddy, let's get you started with the bewakoofi!</p>
            <label>Email:</label>
            <input type ="email"  required 
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            <label>Username:</label>
            <input type ="name"  required 
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
            <label>Password:</label>
            <input type ="password" required 
            value={pass}
            onChange={(e) => setPassword(e.target.value)}/>
            <label>Confirm Password:</label>
            <input type ="password" required 
            value={conPass}
            onChange={(e) => setConPassword(e.target.value)}/>
            <button>Submit</button>
        </form>
        </div>
        </div>
     );
}
 
export default SignUp;