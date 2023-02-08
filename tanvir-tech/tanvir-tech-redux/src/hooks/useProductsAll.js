import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadProductData from "../redux/thunk/products/fetchProducts";

export const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(loadProductData());
  }, [dispatch]);

  return products;
};
