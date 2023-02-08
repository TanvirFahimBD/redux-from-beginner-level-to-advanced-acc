import React from "react";

const ProductRow = ({ pd, pos }) => {
  const { model, brand, status, price } = pd;
  return (
    <tr>
      <td>{pos + 1}</td>
      <td>{model}</td>
      <td>{brand.toUpperCase()}</td>
      <td className={`${status ? "text-success" : "text-danger"}`}>
        {status ? "Available" : "Out of stock"}
      </td>
      <td>${price}</td>
      <td>🗑</td>
    </tr>
  );
};

export default ProductRow;
