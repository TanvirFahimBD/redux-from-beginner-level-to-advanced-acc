import { addProduct } from "../../actionCreators/productActions";

const addProductData = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    if (data.acknowledged) {
      alert("product added successfully");
      const addedProduct = { _id: data.insertedId, ...product };
      dispatch(addProduct(addedProduct));
    }
  };
};

export default addProductData;
