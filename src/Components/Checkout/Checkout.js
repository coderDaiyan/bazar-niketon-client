import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import products from "../../fakeData/products.json";
import "./Checkout.css";

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { productId } = useParams();
  const checkoutProduct = products.find((product) => product.id == productId);
  console.log(checkoutProduct);

  const { name, weight, price } = checkoutProduct;

  const handleOrderPlaced = () => {
    setOrderPlaced(true);
  };

  return (
    <>
      <h3 style={{ margin: "20px", fontWeight: "700" }}>Checkout</h3>
      <div className="parent">
        {orderPlaced ? (
          <div className="order-confirm">
            <div className="">
              <img
                className="confirm-img"
                src="https://media2.giphy.com/media/lPpZEYGuFRLM9bolIL/giphy-preview.gif"
                alt=""
              />
            </div>
            <div className="confirm-text">
              <h1>Congratulations!</h1>
              <p>
                Dear Sir, Thank you for your order. We are glad to place our
                first order with you.We have taken special care for the quality
                and packing of the products and we hope that you will find them
                highly satisfactory.
                <br />
                We thank you again for your kind offer of the products and hope
                that you will extend your similar co-operation in the future.
              </p>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                <button className="btn btn-success">Back To Home</button>
              </Link>
            </div>
          </div>
        ) : (
          <table class="table table-hover table-borderless">
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
              <hr />
            </thead>
            <tbody>
              <tr>
                <th scope="row">{name}</th>
                <td>{weight}</td>
                <td>৳{price}</td>
              </tr>
              <hr />
              <tr>
                <th colSpan="2" scope="row">
                  Total
                </th>
                <td>৳{price}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <button
        onClick={handleOrderPlaced}
        className="btn place-order btn-lg btn-success"
      >
        Place Order
      </button>
    </>
  );
};

export default Checkout;
