import styled from "styled-components";
import { useState } from "react";

const Content = () => {
  const [todo, setTodo] = useState([
    { id: 1, text: "Javascript 기초 공부" },
    { id: 2, text: "React 기초 공부" },
    { id: 3, text: "TODO 리스트 만들기" },
  ]);

  const onDelete = (id) => {
    const newTodo = todo.filter((e) => e.id !== id);
    setTodo(newTodo);
  };

  return (
    <>
      <List>
        {todo.map((todo) => (
          <Item key={todo.id}>
            <label>
              <input type="checkbox" />
              <Cont>{todo.text}</Cont>
            </label>
            <BtnDelete onClick={() => onDelete(todo.id)}>-</BtnDelete>
          </Item>
        ))}
      </List>
    </>
  );
};
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background: #fff;
  min-height: 50vh;
`;
const Item = styled.li`
  height: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & + & {
    border-top: 1px solid #ddd;
  }
  :nth-child(2n) {
    background: #efefef;
  }
`;
const Cont = styled.span`
  flex: 1;
  margin-left: 15px;
`;
const BtnDelete = styled.button`
  width: 25px;
  height: 25px;
  font-size: 20px;
  border-radius: 55px;
  color: #fff;
  background-color: red;
  border: none;
  cursor: pointer;
`;
export default Content;
