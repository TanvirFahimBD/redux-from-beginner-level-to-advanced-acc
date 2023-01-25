import React, { createContext, useContext, useEffect, useReducer } from "react";
import { actionTypes } from "../state/ProductState/actionTypes";
import { initialState, reducer } from "../state/ProductState/ProductReducer";

export const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("https://fake-api.up.railway.app/pcProducts")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.FETCHING_ERROR });
      });
  }, []);

  const value = { state, dispatch };

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  return useContext(PRODUCT_CONTEXT);
};

export default ProductProvider;
