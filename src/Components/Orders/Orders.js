import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import "./Orders.css";

const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(
      `https://glacial-refuge-60691.herokuapp.com/orders?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [loggedInUser]);

  const { email } = loggedInUser;
  return (
    <>
      <div className="d-flex justify-content-center m-5">
        <h1 style={{ fontWeight: "bold" }}>Your Recent Orders</h1>
      </div>
      <h5 className="text-center">
        You Have {orders.length} {orders.length <= 1 ? "Booking" : "Bookings"}
      </h5>
      <p className="ms-4 text-center">Email: {email}</p>

      <div className="orders">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order.name}</td>
                <td>${order.price}</td>
                <td>01</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
