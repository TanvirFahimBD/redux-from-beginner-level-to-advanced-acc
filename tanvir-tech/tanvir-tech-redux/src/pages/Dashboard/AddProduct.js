import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addProductData from "../../redux/thunk/products/addProductData";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");
  const [brand, setBrand] = useState("");
  const [status, setStatus] = useState(false);
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [feature1, setFeature1] = useState("");
  const [feature2, setFeature2] = useState("");
  const [feature3, setFeature3] = useState("");
  const [feature4, setFeature4] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    const productInfo = {
      product,
      brand,
      status,
      image,
      image2,
      feature1,
      feature2,
      feature3,
      feature4,
    };
    dispatch(addProductData(productInfo));
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleAddProduct}>
        <div className="d-flex justify-content-center align-items-center border shadow-lg p-4 m-4">
          <div className="w-50">
            <input
              type="text"
              name="product"
              className="d-block my-2"
              placeholder="Enter Product name"
              onBlur={(e) => setProduct(e.target.value)}
            />
            <select onChange={(e) => setBrand(e.target.value)}>
              <option value="amd">AMD</option>
              <option value="intel">Intel</option>
            </select>
            <br />
            <input
              type="radio"
              name="status"
              value="Available"
              className="mx-3"
              onChange={(e) => setStatus(e.target.value)}
            />{" "}
            Available
            <input
              type="radio"
              name="status"
              value="Out of Stock"
              className="mx-3"
              onChange={(e) => setStatus(e.target.value)}
            />{" "}
            Out of Stock
            <br />
            <input
              type="text"
              name="feature1"
              className="d-block my-2"
              placeholder="Key feature 1"
              onBlur={(e) => setFeature1(e.target.value)}
            />
            <input
              type="text"
              name="feature3"
              className="d-block my-2"
              placeholder="Key feature 3"
              onBlur={(e) => setFeature3(e.target.value)}
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
              name="image"
              placeholder="Image"
              onBlur={(e) => setImage(e.target.value)}
            />
            <input
              type="text"
              className="d-block my-2"
              name="image2"
              placeholder="Image"
              onBlur={(e) => setImage2(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="feature2"
              className="d-block my-2"
              placeholder="Key feature 2"
              onBlur={(e) => setFeature2(e.target.value)}
            />
            <input
              type="text"
              name="feature4"
              className="d-block my-2"
              placeholder="Key feature 4"
              onBlur={(e) => setFeature4(e.target.value)}
            />
            <br />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
