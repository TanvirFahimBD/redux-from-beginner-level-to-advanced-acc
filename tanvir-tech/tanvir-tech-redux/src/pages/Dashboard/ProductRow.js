import React from "react";
import { useDispatch } from "react-redux";
import { useProducts } from "../../hooks/useProductsAll";
import { deleteProductData } from "../../redux/thunk/products/deleteProductData";

const ProductRow = ({ pd, pos, removeHandle }) => {
  const { model, brand, status, price } = pd;

  const dispatch = useDispatch()
  useProducts()

  const deleteHandler = (pd) => {
    const confirm = window.confirm(`Are you sure you want to delete ${pd.model}`);
    if (confirm) {
      dispatch(deleteProductData(pd._id))
      removeHandle()
    }
  }
  return (
    <tr>
      <td>{pos + 1}</td>
      <td>{model}</td>
      <td>{brand.toUpperCase()}</td>
      <td className={`${status ? "text-success" : "text-danger"}`}>
        {status ? "Available" : "Out of stock"}
      </td>
      <td>${price}</td>
      <td>
        <button className='btn btn-danger' onClick={() => deleteHandler(pd)}>🗑</button>
      </td>
    </tr>
  );
};

export default ProductRow;
