import {
  ADD_TO_CART,
  ADD_TO_WISH_LIST,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISH_LIST,
} from "../actionTypes/actionTypes";

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
