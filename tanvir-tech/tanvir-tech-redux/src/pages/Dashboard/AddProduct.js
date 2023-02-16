import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addProductData from "../../redux/thunk/products/addProductData";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [model, setModel] = useState("");
  //brand
  const [brand, setBrand] = useState("amd");
  const [image, setImage] = useState("");
  //status
  const [status, setStatus] = useState(false);
  const [feature1, setFeature1] = useState("");
  const [feature2, setFeature2] = useState("");
  const [feature3, setFeature3] = useState("");
  const [feature4, setFeature4] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [spec1, setSpec1] = useState("");
  const [spec2, setSpec2] = useState("");
  const [spec3, setSpec3] = useState("");
  const [spec4, setSpec4] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    const keyFeature = [feature1, feature2, feature3, feature4];
    const spec = [
      { processor: spec1 },
      { motherboard: spec2 },
      { ram: spec3 },
      { storage: spec4 },
    ];
    const productInfo = {
      model,
      brand,
      image,
      status,
      keyFeature,
      price: parseInt(price),
      rating: parseInt(rating),
      spec,
    };
    dispatch(addProductData(productInfo));
    // e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleAddProduct}>
        <div className="d-flex justify-content-center align-items-center border shadow-lg p-4 m-4">
          <div className="w-50">
            <input
              type="text"
              name="model"
              className="d-block my-2"
              placeholder="Enter Model"
              onBlur={(e) => setModel(e.target.value)}
            />
            <select onChange={(e) => setBrand(e.target.value)}>
              <option value="amd">AMD</option>
              <option value="intel">Intel</option>
            </select>
            <br />
            <input
              type="radio"
              name="status"
              className="mx-3"
              onChange={(e) => setStatus(true)}
            />{" "}
            Available
            <input
              type="radio"
              name="status"
              className="mx-3"
              onChange={(e) => setStatus(false)}
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
            <br />
            <input
              type="text"
              name="spec1"
              className="d-block my-2"
              placeholder="Spec 1"
              onBlur={(e) => setSpec1(e.target.value)}
            />
            <input
              type="text"
              name="spec3"
              className="d-block my-2"
              placeholder="Spec 3"
              onBlur={(e) => setSpec3(e.target.value)}
            />
            <br />
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
              type="number"
              className="d-block my-2"
              name="price"
              placeholder="Price"
              onBlur={(e) => setPrice(e.target.value)}
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
            <input
              type="text"
              name="spec2"
              className="d-block my-2"
              placeholder="Spec 2"
              onBlur={(e) => setSpec2(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="spec4"
              className="d-block my-2"
              placeholder="Spec 4"
              onBlur={(e) => setSpec4(e.target.value)}
            />
            <input
              type="number"
              className="d-block my-2"
              name="rating"
              placeholder="Rating"
              onBlur={(e) => setRating(e.target.value)}
            />
            <br />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
