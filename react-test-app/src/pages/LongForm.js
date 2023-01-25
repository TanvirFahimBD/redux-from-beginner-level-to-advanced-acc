import React, { useReducer } from "react";

const LongForm = () => {
  const initialState = {
    firstName: "",
  };
  const reducer = (state, action) => {
    console.log(action);
    if (action.type === "INPUT") {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInfo = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <h1>Long Form</h1>
      <form onSubmit={handleInfo}>
        <div className="d-flex">
          <div className="w-50">
            <label htmlFor="firstName" className="d-block">
              First Name
            </label>
            <input
              className="my-2 rounded p-2"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter firstName"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div className="w-50">
            <label htmlFor="lastName" className="d-block">
              Last Name
            </label>
            <input
              className="my-2 rounded  p-2"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter lastName"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
            <br />
            <input
              type="submit"
              className="my-2 rounded  p-2 btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LongForm;
