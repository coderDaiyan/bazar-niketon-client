import React from "react";
import { Link } from "react-router-dom";

const ProductDetail = ({ product }) => {
  const { image, name, id } = product;
  return (
    <>
      <div className="card product-card col-md-4" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <button className="btn buy-now-btn btn-success">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={`/checkout/${id}`}
            >
              Buy Now
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
