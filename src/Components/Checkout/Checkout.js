import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Checkout.css";

const Checkout = () => {
  const [orderedProduct, setOrderedProduct] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { productId } = useParams();

  const { email } = loggedInUser;

  useEffect(() => {
    fetch(`https://glacial-refuge-60691.herokuapp.com/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderedProduct(data);
      });
  }, [productId]);

  const { name, weight, price } = orderedProduct;
  const handleOrderPlaced = () => {
    const newOrder = {
      ...loggedInUser,
      name,
      weight,
      price,
    };
    fetch("https://glacial-refuge-60691.herokuapp.com/addOder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setOrderPlaced(true);
        }
      });
  };

  return (
    <>
      <h3 style={{ margin: "20px", fontWeight: "700" }}>Checkout</h3>
      <p className="ms-4">Email: {email}</p>
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
                Dear Sir/Madam, Thank you for your order. We are glad to place
                our first order with you.We have taken special care for the
                quality and packing of the products and we hope that you will
                find them highly satisfactory.
                <br />
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
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style={{ fontSize: "20px" }} scope="row">
                  {name}
                </th>
                <td>{weight}</td>
                <td>৳{price}</td>
              </tr>
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

// <table class="table-hover table-borderless">
// <thead>
//   <tr>
//     <th scope="col">Product Name</th>
//     <th scope="col">Quantity</th>
//     <th scope="col">Price</th>
//   </tr>
//   <hr />
// </thead>
// <tbody>
//   <tr>
//     <th scope="row">{name}</th>
//     <td>{weight}</td>
//     <td>৳{price}</td>
//   </tr>
//   <hr />
//   <tr>
//     <th colSpan="2" scope="row">
//       Total
//     </th>
//     <td>৳{price}</td>
//   </tr>
// </tbody>
// </table>
