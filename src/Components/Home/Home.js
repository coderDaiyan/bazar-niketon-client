import React from "react";
import products from "../../fakeData/products.json";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./Home.css";

const Home = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {products.length !== 0 ? (
          products.map((product) => (
            <ProductDetail key={product.id} product={product} />
          ))
        ) : (
          <div style={{ textAlign: "center" }}>
            <img
              className="spinner ms-5"
              src="https://i.pinimg.com/originals/f9/41/ae/f941ae9d16fd7d2957eea6e5b1100d1e.gif"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
