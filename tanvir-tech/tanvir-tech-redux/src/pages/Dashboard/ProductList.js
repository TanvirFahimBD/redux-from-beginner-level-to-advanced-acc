import React from "react";
import Table from "react-bootstrap/Table";
import { useProducts } from "../../hooks/useProductsAll";
import ProductRow from "./ProductRow";

const ProductList = () => {
  const products = useProducts();
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
            <ProductRow pd={pd} key={i} pos={i} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
