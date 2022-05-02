import { useState } from "react";

//const obj = { a: 1, b: 2, c: 2 };
//const nObj = { ...obj, b: 10 };

const Say = ({ str }) => {
  const [msg, setMsg] = useState(str);
  const onEnter = () => setMsg("안녕하세요");
  const onExit = () => setMsg("안녕히 가세요");
  const [color, setColor] = useState("black");
  return (
    <>
      <h1>Say.jsx</h1>
      {/* key와 value가 같을 경우 생략가능 */}
      {/* <h1 style={{ color }}>{msg}</h1> */}
      <h1 style={{ color: color }}>{msg}</h1>
      <button onClick={onEnter}>입장</button>
      <button onClick={onExit}>퇴장</button>
      <button onClick={() => setMsg(str)}>초기화</button>
      <br />
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파랑색
      </button>
    </>
  );
};

export default Say;
