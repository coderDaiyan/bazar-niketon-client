import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../App";
import ProductCard from "../ProductCard/ProductCard";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useContext(ProductContext);
  useEffect(() => {
    fetch("https://bazar-niketon.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [setProducts]);
  console.log(products);
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {products.length !== 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
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
