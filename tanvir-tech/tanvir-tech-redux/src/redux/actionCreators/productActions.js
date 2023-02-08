import {
  ADD_PRODUCT,
  ADD_TO_CART,
  ADD_TO_WISH_LIST,
  LOAD_DATA,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISH_LIST,
} from "../actionTypes/actionTypes";

export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};

export const loadData = (data) => {
  return {
    type: LOAD_DATA,
    payload: data,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const addToWishList = (product) => {
  return {
    type: ADD_TO_WISH_LIST,
    payload: product,
  };
};

export const removeFromWishList = (product) => {
  return {
    type: REMOVE_FROM_WISH_LIST,
    payload: product,
  };
};
