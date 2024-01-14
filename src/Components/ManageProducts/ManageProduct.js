import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://bazar-niketon.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://bazar-niketon.onrender.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const remainProduct = products.filter(
            (product) => product._id !== id
          );
          swal("YAY!", "You deleted the product!", "success");
          setProducts(remainProduct);
        }
      });
  };
  return (
    <>
      <div style={{ padding: "20px" }}>
        {products.length > 0 ? (
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
    </>
  );
};

export default ManageProduct;
