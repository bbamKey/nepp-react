import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");

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
