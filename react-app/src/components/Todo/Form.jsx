import styled from "styled-components";
import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      console.log("할 일을 입력해 주세요.");
      return;
    }

    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Wrap>
        <InputTodo
          placeholder="할 일을 입력해 주세요."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <ButtonSubmit>입력</ButtonSubmit>
      </Wrap>
    </form>
  );
};

const Wrap = styled.div`
  display: flex;
`;
const InputTodo = styled.input`
  flex: 1;
  background: #111;
  color: #fff;
  border: none;
  height: 40px;
  padding: 0 10px;
  ::placeholder {
    color: #dee2e6;
  }
`;
const ButtonSubmit = styled.button`
  width: 70px;
  border: none;
  background: #dee2e6;
  cursor: pointer;
`;

export default Form;
