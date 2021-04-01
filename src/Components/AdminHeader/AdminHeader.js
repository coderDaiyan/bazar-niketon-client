import React from "react";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <>
      <nav
        style={{ background: "#203D37" }}
        className="navbar navbar-expand-lg"
      >
        <div className="container-fluid">
          <Link style={{ color: "white" }} className="navbar-brand">
            Admin Panel
          </Link>
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
                <Link
                  style={{ color: "white" }}
                  className="nav-link"
                  to="/manage-products"
                >
                  Manage Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link"
                  aria-current="page"
                  to="/addProduct"
                >
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link"
                  aria-current="page"
                  to="/edit-product"
                >
                  Edit Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminHeader;
