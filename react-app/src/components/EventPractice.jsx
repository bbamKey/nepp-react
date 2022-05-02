import { useState } from "react";

const EventPractice = () => {
  const defUserName = "홍길동";
  const defMsg = "의적";

  const [msg, setMsg] = useState(defMsg);
  const [userName, setUserName] = useState(defUserName);

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeMsg = (e) => setMsg(e.target.value);
  const onClick = () => {
    alert(`${userName} : ${msg}`);
    setUserName(defUserName);
    setMsg(defMsg);
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };

  return (
    <>
      <h1>EventPractice.jsx</h1>
      <h3>
        {userName} : {msg}
      </h3>
      <input
        type="text"
        placeholder="텍스트를 입력해 주세요."
        name="userName"
        onChange={onChangeUserName}
        onKeyPress={onKeyPress}
        value={userName}
      />
      <input
        type="text"
        placeholder="텍스트를 입력해 주세요."
        name="message"
        onChange={onChangeMsg}
        onKeyPress={onKeyPress}
        value={msg}
      />
      <button onClick={onClick}>초기화</button>
    </>
  );
};

export default EventPractice;
