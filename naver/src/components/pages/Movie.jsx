import styled from "styled-components";
import { useEffect, useState } from "react";
import { getMovies } from "../../apis";

import MovieList from "../templates/movie/MovieList";
import SearchForm from "../templates/movie/SearchForm";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useState({
    query: "",
    country: "",
  });
  //const [query, setQuery] = useState("");
  // const [country, setCountry] = useState("");

  useEffect(() => {
    refreshMoveis();
  }, [params]);

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };

  const refreshMoveis = async () => {
    const { query, country } = params;

    if (!query) return;

    if (params.country === "") {
      delete params.country;
    }

    // const params = { query };
    // if (country !== "") params.country = country;

    const result = await getMovies(params);
    setMovies(result.items);
  };

  return (
    <>
      <Layout>
        <Title>Movie</Title>
        <SearchForm onChange={handleChange} />
        <MovieList data={movies} />
      </Layout>
    </>
  );
};

const Layout = styled.div`
  padding: 10px;
  width: 100vw;
  display: flex;
  flex-direction: column;
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
