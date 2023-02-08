import { ADD_TO_CART } from "../actionTypes/actionTypes";

const cartCounter = (store) => (next) => (action) => {
  if (action.type === ADD_TO_CART) {
    const state = store.getState();
    const cart = state.product.cart;
    const newAction = {
      ...action,
      payload: {
        ...action.payload,
        cartPosition: cart.length,
      },
    };
    return next(newAction);
  }
  return next(action);
};

export default cartCounter;
