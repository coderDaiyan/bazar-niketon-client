import React from "react";
import { useParams } from "react-router";
import products from "../../fakeData/products.json";
import "./Checkout.css";

const Checkout = () => {
  const { productId } = useParams();
  const checkoutProduct = products.find((product) => product.id == productId);
  console.log(checkoutProduct);

  const { name, weight, price } = checkoutProduct;

  return (
    <>
      <h1 style={{ margin: "20px", fontWeight: "700" }}>Checkout</h1>
      <div className="parent">
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
      </div>
    </>
  );
};

export default Checkout;
