import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");

  /*
    useEffect는
    -return문이 clean up 이기때문에 early 리턴 사용불가
    -async도 사용 불가

    두번째 인자에 빈 배열을 넣으면
    마운트될때 한번 실행
    마운트해제될때 클린업 함수 한번 실행
  */
  useEffect(() => {
    console.log("마운트 될 때 실행");
    console.log({ name, nick });
    return () => {
      console.log("바뀌기 직전 선 실행 clean up!");
      console.log({ name, nick });
    };
  }, [name, nick]);

  return (
    <>
      <h1>Info.jsx</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={nick} onChange={(e) => setNick(e.target.value)} />
      <h2>이름 : {name}</h2>
      <h2>닉네임 : {nick}</h2>
    </>
  );
};

export default Info;
