import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddProduct from "./Components/AddProduct/AddProduct";
import Admin from "./Components/Admin/Admin";
import AdminHeader from "./Components/AdminHeader/AdminHeader";
import Checkout from "./Components/Checkout/Checkout";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
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
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/manage-products"></PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AdminHeader />
            <AddProduct />
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
  );
}

export default App;
