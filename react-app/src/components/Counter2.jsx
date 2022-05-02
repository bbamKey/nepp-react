import { useState } from "react";
const Counter2 = () => {
  const [num, setNum] = useState(7);
  const handleNum = (n) => {
    setNum(num + n);
  };
  const handleReset = (n) => {
    setNum(n);
  };
  return (
    <>
      <h1>Counter2</h1>
      <h3>
        현재 카운터 값은 <b>{num}</b> 입니다
      </h3>
      <p>
        <button onClick={() => handleNum(-1)}>-1</button>
        <button onClick={() => handleReset(7)}>C</button>
        <button onClick={() => handleNum(1)}>+1</button>
      </p>
    </>
  );
};

export default Counter2;
