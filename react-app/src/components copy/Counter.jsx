import { useState } from "react";

// const userState = (init) => {
//   let state = init;
//   const setState = (val) => {
//     state = val;
//   };
//   return [state, setState];
// };

const Counter = () => {
  const [number, setNumber] = useState(0); // useState(상태값의초기값)
  const [number2, setNumber2] = useState(10);
  const [number3, setNumber3] = useState(100);
  return (
    <>
      <h1>{number}</h1>
      <h1>{number2}</h1>
      <h1>{number3}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          console.log(setNumber);
          //   setNumber = number + 1;
          //   console.log(number);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setNumber2(number2 + 10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          setNumber3(number3 + 100);
        }}
      >
        +100
      </button>
    </>
  );
};

export default Counter;
