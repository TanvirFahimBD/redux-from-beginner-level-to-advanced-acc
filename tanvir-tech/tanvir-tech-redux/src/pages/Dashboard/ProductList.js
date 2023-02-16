import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import loadProductData from "../../redux/thunk/products/fetchProducts";
import ProductRow from "./ProductRow";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  let deleteVal = 0;

  useEffect(() => {
    dispatch(loadProductData());
    console.log('load now')
  }, [dispatch, deleteVal]);

  const removeHandle = () => {
    deleteVal = deleteVal + 1;
  }

  return (
    <div className="my-5 border shadow-lg rounded">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>BRAND</th>
            <th>IN STOCK</th>
            <th>PRICE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {products.map((pd, i) => (
            <ProductRow pd={pd} key={i} pos={i} removeHandle={removeHandle} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
