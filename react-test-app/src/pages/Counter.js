import React, { useReducer } from "react";

const Counter = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + action.payload.count;
    } else if (action.type === "DECREMENT") {
      return state - action.payload.count;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="border rounder shadow-lg  m-4 p-4">
      <h1>Counter</h1>
      <h1>{state}</h1>
      <button
        className="btn btn-primary mx-3"
        onClick={() => dispatch({ type: "INCREMENT", payload: { count: 4 } })}
      >
        Increment
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "DECREMENT", payload: { count: 4 } })}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
