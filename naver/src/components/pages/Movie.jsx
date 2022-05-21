import styled from "styled-components";
import { useEffect, useState } from "react";
import { getMovies } from "../../apis";

import MovieList from "../templates/movie/MovieList";
import SearchForm from "../templates/movie/SearchForm";
import Pagination from "../organisms/Pagination";

const perPage = 10;
const perBtn = 7;

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [listSize, setListSize] = useState(0);
  const [params, setParams] = useState({
    query: "",
    country: "",
  });

  useEffect(() => {
    refreshMoveis();
  }, [params, page]);

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setPage(1);
    setParams(newParams);
  };

  const refreshMoveis = async () => {
    const { query, country } = params;

    if (!query) return;

    if (country === "") {
      delete params.country;
    }

    params.start = (page - 1) * perPage + 1;

    const { items, total } = await getMovies(params);
    setListSize(total);
    setMovies(items);
  };

  return (
    <>
      <Layout>
        <Title>Movie</Title>
        <SearchForm onChange={handleChange} />
        <MovieList data={movies} />
        <Pagination
          listSize={listSize}
          perPage={perPage}
          now={page}
          perBtn={perBtn}
          onSetPage={(val) => setPage(val)}
        />
      </Layout>
    </>
  );
};

const Layout = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  min-height: 500px;
`;

const Title = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px 0 10px 0;
  text-align: center;
  font-size: 30px;
  font-weight: 800;
`;

export default Movie;
