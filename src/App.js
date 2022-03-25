import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddToBag from "./AddtoBag";
import LoginContextProvider from "./context/LoginSignOut";
import Header from "./Header";
import "./index.css";
import Joggers from "./Joggers";
import Login from "./Login";
import Popular from "./Popular";
import ProductDetails from "./ProductDetails";
import SignUp from "./Signup";
import Slider from "./Slider";
import WishList from "./Wishlist";
function App() {
  return (
    <Router>
      <LoginContextProvider>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Slider />
              <Popular />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/joggers">
              <Joggers />
            </Route>
            <Route exact path="/wishlist">
              <WishList />
            </Route>
            <Route exact path="/product/:id">
              <ProductDetails />
            </Route>
            <Route exact path="/addtobag">
              <AddToBag />
            </Route>
          </Switch>
        </div>
      </LoginContextProvider>
    </Router>
  );
}

export default App;
