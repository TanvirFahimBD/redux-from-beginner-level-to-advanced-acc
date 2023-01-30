import React from "react";

const AddProduct = () => {
  return (
    <div className="d-flex justify-content-evenly">
      <form>
        <div className="w-50">
          <input type="text" placeholder="Enter Product name" />
          <input type="text" placeholder="Enter Product name" />
          <input type="text" placeholder="Enter Product name" />
          <input type="text" placeholder="Enter Product name" />
        </div>
        <div className="w-50">
          <input type="text" placeholder="Enter Product name" />
          <input type="text" placeholder="Enter Product name" />
          <input type="text" placeholder="Enter Product name" />
          <input type="submit" value="Add Product" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
