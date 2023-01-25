import React, { useReducer } from "react";

const LongForm = () => {
  const initialState = {
    firstName: "",
    email: "",
    message: "",
    lastName: "",
    gender: "",
    terms: false,
    quantity: 0,
  };

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "TOGGLE":
        return {
          ...state,
          terms: !state.terms,
        };
      case "INCREMENT":
        return {
          ...state,
          quantity: state.quantity + action.payload.count,
        };
      case "DECREMENT":
        return {
          ...state,
          quantity: state.quantity - action.payload.count,
        };
      default:
        return state;
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
              required
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
            <label htmlFor="email" className="d-block">
              Email
            </label>
            <input
              className="my-2 rounded p-2"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              required
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
            <label htmlFor="email" className="d-block">
              Education
            </label>
            <select
              className="my-2 rounded p-2"
              name="education"
              id="education"
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            >
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="BSC">BSC</option>
              <option value="MSC">MSC</option>
            </select>
            <label htmlFor="message" className="d-block">
              Message
            </label>
            <textarea
              className="my-2 rounded p-2"
              type="text"
              name="message"
              id="message"
              placeholder="Enter firstName"
              required
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
            <br />
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="mx-2"
              onChange={(e) =>
                dispatch({
                  type: "TOGGLE",
                })
              }
            />
            <label htmlFor="term">Accept terms and conditions</label>
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
              required
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
            <h3>Gender</h3>
            <div className="d-flex ms-5">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <label htmlFor="male" className="d-block mx-3">
                Male
              </label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <label htmlFor="female" className="d-block mx-3">
                Female
              </label>
            </div>
            <br />
            <button
              className="btn btn-primary mx-3"
              onClick={() =>
                dispatch({
                  type: "INCREMENT",
                  payload: { count: 4 },
                })
              }
            >
              +
            </button>
            <span>{state.quantity}</span>
            <button
              className="btn btn-primary mx-3"
              onClick={() =>
                dispatch({
                  type: "DECREMENT",
                  payload: { count: 4 },
                })
              }
            >
              -
            </button>
            <br />
            <input
              type="submit"
              className="my-2 rounded  p-2 btn btn-primary"
              disabled={!state.terms}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LongForm;
