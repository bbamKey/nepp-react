import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import BookList from "../templates/book/BookList";
import SearchForm from "../templates/movie/SearchForm";
import Pagination from "../organisms/Pagination";
import { getBooks } from "../../apis";

const perPage = 10;
const perBtn = 7;

const Book = () => {
  const [serachParams, setSearchParams] = useSearchParams();
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [listSize, setListSize] = useState(0);
  const [params, setParams] = useState({
    query: "",
    country: "",
  });

  useEffect(() => {
    const queryQS = serachParams.get("query");
    const pageQS = serachParams.get("page");
    if (queryQS) {
      params.query = queryQS;
      if (pageQS) setPage(pageQS);
    } else {
      delete params.query;
    }
  }, []);

  useEffect(() => {
    refreshList();
  }, [params, page]);

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setPage(1);
    setParams(newParams);
  };

  const refreshList = async () => {
    const { query, country } = params;

    if (!query) return;

    setSearchParams({ query, page });

    if (country === "") {
      delete params.country;
    }

    params.start = (page - 1) * perPage + 1;

    const { items, total } = await getBooks(params);
    setListSize(total);
    setBooks(items);
  };

  return (
    <>
      <h1>Book</h1>
      <SearchForm initSearch={params.query} onChange={handleChange} />
      <BookList data={books}></BookList>
      <Pagination
        isDropdown={false}
        listSize={listSize}
        perPage={perPage}
        now={page}
        perBtn={perBtn}
        onSetPage={(val) => setPage(val)}
      />
    </>
  );
};

export default Book;
