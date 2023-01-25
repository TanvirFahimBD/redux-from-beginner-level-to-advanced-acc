import { actionTypes } from "./actionTypes";

export const initialState = {
  firstName: "",
  email: "",
  message: "",
  lastName: "",
  gender: "",
  terms: false,
  quantity: 0,
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.TOGGLE:
      return {
        ...state,
        terms: !state.terms,
      };
    case actionTypes.INCREMENT:
      return {
        ...state,
        quantity: state.quantity + action.payload.count,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        quantity: state.quantity - action.payload.count,
      };
    default:
      return state;
  }
};
