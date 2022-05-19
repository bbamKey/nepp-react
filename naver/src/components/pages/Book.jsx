import styled from "styled-components";
import { useState, useEffect } from "react";

import BookList from "../templates/book/BookList";
import { getBooks } from "../../apis";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = async (e) => {
    if (!text) return;

    const { items } = await getBooks({ query: text });
    setBooks(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    refreshList();
  };

  return (
    <>
      <h1>Book</h1>
      <Form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button>검색</button>
      </Form>
      <BookList data={books}></BookList>
    </>
  );
};

const Form = styled.form``;
const List = styled.div``;

export default Book;
