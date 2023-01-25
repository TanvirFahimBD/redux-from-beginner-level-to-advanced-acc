import { actionTypes } from "./actionTypes";

export const initialState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
  wishList: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actionTypes.FETCHING_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    }
    case actionTypes.FETCHING_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case actionTypes.ADD_TO_CART: {
      return {
        ...state,
        loading: false,
        cart: [...state.cart, action.payload],
        error: false,
      };
    }
    case actionTypes.ADD_TO_WISH_LIST: {
      return {
        ...state,
        loading: false,
        wishList: [...state.wishList, action.payload],
        error: false,
      };
    }
    case actionTypes.REMOVE_FROM_WISH_LIST: {
      return {
        ...state,
        loading: false,
        wishList: [...state.wishList].filter((p) => p.id !== action.payload.id),
        error: false,
      };
    }
    case actionTypes.REMOVE_FROM_CART: {
      return {
        ...state,
        loading: false,
        cart: [...state.cart].filter((p) => p.id !== action.payload.id),
        error: false,
      };
    }
    default:
      return state;
  }
};
