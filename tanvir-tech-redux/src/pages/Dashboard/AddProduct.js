import React from "react";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    alert("product added");
  };
  return (
    <div>
      <form onSubmit={handleAddProduct}>
        <div className="d-flex justify-content-center align-items-center border shadow-lg p-4 m-4">
          <div className="w-50">
            <input
              type="text"
              className="d-block my-2"
              placeholder="Enter Product name"
            />
            <input
              type="text"
              className="d-block my-2"
              placeholder="Enter Product name"
            />
            <input
              type="text"
              className="d-block my-2"
              placeholder="Enter Product name"
            />
            <div className="text-start ">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary mx-auto w-25"
              />
            </div>
          </div>
          <div className="w-50">
            <input
              type="text"
              className="d-block my-2"
              placeholder="Enter Product name"
            />
            <input
              type="text"
              className="d-block my-2"
              placeholder="Enter Product name"
            />
            <input
              type="text"
              className="d-block my-2"
              placeholder="Enter Product name"
            />
            <br />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
