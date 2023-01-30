import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  const selected = state.cart.find(
    (product) => product.id === action.payload.id
  );

  switch (action.type) {
    case ADD_TO_CART:
      if (selected) {
        const prevCart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
        selected.quantity = selected.quantity + 1;
        return {
          ...state,
          cart: [...prevCart, selected],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      if (selected.quantity > 1) {
        const prevCart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
        selected.quantity = selected.quantity - 1;
        return {
          ...state,
          cart: [...prevCart, selected],
        };
      }
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default productReducer;
