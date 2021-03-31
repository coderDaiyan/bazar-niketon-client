import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div id="container">
      <div className="content">
        <h2>404</h2>
        <h4>Oops! Page Not Found</h4>
        <p>
          The page you are looking for does not exist. You may have mistyped the
          address of the page may have moved
        </p>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
