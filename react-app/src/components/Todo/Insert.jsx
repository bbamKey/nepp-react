import styled from "styled-components";
import { useState, useRef } from "react";
import ItemLi from "./ItemLi";
import Form from "./Form";

const Insert = () => {
  const [todo, setTodo] = useState([
    { id: 1, text: "Javascript 기초 공부" },
    { id: 2, text: "React 기초 공부" },
    { id: 4, text: "TODO 리스트 만들기" },
  ]);

  const nextId = useRef(5);

  const handleSubmit = (text) => {
    setTodo([{ id: nextId.current, text }, ...todo]);
    nextId.current++;
  };

  const onDelete = (id) => {
    const newTodo = todo.filter((e) => e.id !== id);
    setTodo(newTodo);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <List>
        {todo.map((todo) => (
          <ItemLi key={todo.id} todo={todo} onDelete={onDelete} />
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

export default Insert;
