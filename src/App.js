import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Admin/Admin";
import Checkout from "./Components/Checkout/Checkout";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Orders from "./Components/Orders/Orders";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <PrivateRoute path="/checkout/:productId">
              <Header />
              <Checkout />
            </PrivateRoute>
            <Route path="/login">
              <Header />
              <Login />
            </Route>
            <PrivateRoute path="/orders">
              <Header />
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route path="*">
              <Header />
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
