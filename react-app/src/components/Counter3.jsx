import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter3 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      <h1>Counter3.jsx</h1>
      <h2>
        현재 카운터 값은 <b>{state.value}</b>
      </h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </>
  );
};
export default Counter3;
