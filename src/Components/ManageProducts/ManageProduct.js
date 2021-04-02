import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://glacial-refuge-60691.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://glacial-refuge-60691.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const remainProduct = products.filter(
            (product) => product._id !== id
          );
          setProducts(remainProduct);
        }
      });
  };
  return (
    <>
      <div style={{ padding: "20px" }}>
        <table class="table tables table-hover table-borderless">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Weight</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr id="parent">
                <td>{product.name}</td>
                <td>{product.weight}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(`${product._id}`)}
                    className="btn btn-danger"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageProduct;
