import { useState } from "react";

const EventPractice2 = () => {
  const [form, setForm] = useState({
    userName: "",
    msg: "",
    memo: "",
  });
  const { userName, msg, memo } = form;
  const onChange = (e) => {
    const { name, value } = e.target;

    //객체나 배열일경우 펼침연산자를 사용한다!
    const nextForm = {
      ...form,
      [name]: value,
    };
    setForm(nextForm);
  };

  return (
    <>
      <h1>EventPractice2.jsx</h1>
      <h3>
        {userName} : {msg} : {memo}
      </h3>
      <input
        type="text"
        placeholder="사용자명을 입력해 주세요."
        name="userName"
        onChange={onChange}
        value={userName}
      />
      <input
        type="text"
        placeholder="텍스트를 입력해 주세요."
        name="msg"
        onChange={onChange}
        value={msg}
      />
      <input
        type="text"
        placeholder="메모를 입력해 주세요."
        name="memo"
        onChange={onChange}
        value={memo}
      />
    </>
  );
};

export default EventPractice2;
