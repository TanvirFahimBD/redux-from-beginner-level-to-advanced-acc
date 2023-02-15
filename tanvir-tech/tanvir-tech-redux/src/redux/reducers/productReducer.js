import {
  ADD_PRODUCT,
  ADD_TO_CART,
  ADD_TO_WISH_LIST,
  LOAD_DATA,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISH_LIST,
} from "../actionTypes/actionTypes";

const initialState = {
  products: [],
  cart: [],
  wishList: [],
};

const productReducer = (state = initialState, action) => {
  const selectedInCart = state.cart.find(
    (product) => product._id === action.payload._id
  );

  const selectedInWishList = state.wishList.find(
    (product) => product._id === action.payload._id
  );

  switch (action.type) {
    // load data
    case LOAD_DATA:
      return {
        ...state,
        products: action.payload,
      };

    // add data
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    // cart
    case ADD_TO_CART:
      if (selectedInCart) {
        const prevCart = state.cart.filter(
          (product) => product._id !== action.payload._id
        );
        selectedInCart.quantity = selectedInCart.quantity + 1;
        return {
          ...state,
          cart: [...prevCart, selectedInCart],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      if (selectedInCart.quantity > 1) {
        const prevCart = state.cart.filter(
          (product) => product._id !== action.payload._id
        );
        selectedInCart.quantity = selectedInCart.quantity - 1;
        return {
          ...state,
          cart: [...prevCart, selectedInCart],
        };
      }
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };

    // wish list
    case ADD_TO_WISH_LIST:
      if (selectedInWishList) {
        const prevWishList = state.wishList.filter(
          (product) => product.id !== action.payload.id
        );
        selectedInWishList.quantity = selectedInWishList.quantity + 1;
        return {
          ...state,
          wishList: [...prevWishList, selectedInWishList],
        };
      }
      return {
        ...state,
        wishList: [...state.wishList, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_WISH_LIST:
      if (selectedInWishList.quantity > 1) {
        const prevWishList = state.wishList.filter(
          (product) => product.id !== action.payload.id
        );
        selectedInWishList.quantity = selectedInWishList.quantity - 1;
        return {
          ...state,
          wishList: [...prevWishList, selectedInWishList],
        };
      }
      return {
        ...state,
        wishList: state.wishList.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
