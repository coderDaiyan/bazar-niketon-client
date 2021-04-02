import React from "react";
import { Link, Switch, useRouteMatch } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProducts/ManageProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const AdminHeader = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand">Admin Panel</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={`${url}/manage-products`}>
                  Manage Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={`${url}/add-product`}
                >
                  Add Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <PrivateRoute path={`${path}/add-product`}>
          <AddProduct />
        </PrivateRoute>
        <PrivateRoute path={`${path}/manage-products`}>
          <ManageProduct />
        </PrivateRoute>
      </Switch>
    </>
  );
};

export default AdminHeader;
