import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const [imageURL, setImageURL] = useState(null);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const { productName, productWeight, productPrice } = data;
    const productData = {
      name: productName,
      weight: productWeight,
      price: productPrice,
      imageURL: imageURL,
    };
    fetch("http://localhost:4000/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const fileData = new FormData();
    fileData.set("key", "f8a4ba4c1854086f3e5c66971eca6267");
    fileData.append("image", file);
    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: fileData,
    })
      .then((res) => res.json())
      .then((data) => setImageURL(data.data.url))
      .catch((err) => console.log(err));
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
              defaultValue="Enter Name"
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
              defaultValue="Enter Weight"
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
              defaultValue="Enter Price"
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
