import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import "./AddProduct.css";

const AddProduct = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const { register, handleSubmit } = useForm();
  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    const imageData = new FormData();
    imageData.set("key", "a65bfe7d9250b3bf1ebe781e931b3a9d");
    imageData.append("image", image);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response.data.data.display_url);
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onSubmit = (data) => {
    const { productName, productWeight, productPrice } = data;
    const productData = {
      name: productName,
      weight: productWeight,
      price: productPrice,
      image: imageUrl,
    };
    fetch("http://localhost:4000/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && imageUrl) {
          swal("Congratulations!", "Product Added!", "success");
        }
      });
  };
  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="productNameInput" className="form-label">
              Product Name
            </label>
            <input
              className="form-control"
              name="productName"
              placeholder="Enter Name"
              ref={register({ required: true })}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="productWeightInput" className="form-label">
              Weight
            </label>
            <input
              type="text"
              name="productWeight"
              className="form-control"
              id="productWeightInput"
              ref={register({ required: true })}
              placeholder="Enter Weight"
            />
          </div>
          <div className="col-6">
            <label htmlFor="productPriceInput" className="form-label">
              Add Price
            </label>
            <input
              type="text"
              name="productPrice"
              className="form-control"
              id="productPriceInput"
              ref={register({ required: true })}
              placeholder="Enter Price"
            />
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="productImage" className="form-label">
                Add Photo
              </label>
              <input
                onChange={handleImageUpload}
                name="productImg"
                className="form-control"
                type="file"
                ref={register({ required: true })}
                id="productImage"
              />
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-success">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
