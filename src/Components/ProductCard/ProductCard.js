import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, id, price, image } = product;
  return (
    <>
      <div className="card product-card col-md-4" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="d-flex justify-content-between">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={`/checkout/${id}`}
            >
              <button className="btn buy-now-btn btn-success">Buy Now</button>
            </Link>
            <h4 style={{ marginTop: "15px" }}>${price}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
