import React from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const handleImageUpload = (e) => {
    // console.log(e.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "5386c4df45f995a8f2ca73a139b65b04");
    imageData.append("image", e.target.files[0]);

    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(imageData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    // axios
    //   .post("https://api.imgbb.com/1/upload", {
    //     imageData,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  const handleAddProduct = (e) => {
    const product = {};
    fetch("http://localhost:4000/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("product addedd");
      });

    e.preventDefault();
  };
  return (
    <>
      <div className="form">
        <form
          action="/addProduct"
          method="POST"
          onSubmit={handleAddProduct}
          className="row g-3"
        >
          <div className="col-md-6">
            <label for="productNameInput" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              id="productNameInput"
            />
          </div>
          <div className="col-md-6">
            <label for="productWeightInput" className="form-label">
              Weight
            </label>
            <input
              type="text"
              className="form-control"
              id="productWeightInput"
              placeholder="Enter Weight"
            />
          </div>
          <div className="col-6">
            <label for="productPriceInput" className="form-label">
              Add Price
            </label>
            <input
              type="text"
              className="form-control"
              id="productPriceInput"
              placeholder="Enter Price"
            />
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="productImage" className="form-label">
                Add Photo
              </label>
              <input
                onChange={handleImageUpload}
                className="form-control"
                type="file"
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
