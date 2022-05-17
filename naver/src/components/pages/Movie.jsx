import styled from "styled-components";
import { useEffect, useState } from "react";
import { getMovies } from "../../apis";
import MovieList from "../templates/movie/MovieList";
import { countryList } from "../../datas/index";
import Dropdown from "../atoms/Dropdown";

const Movie = () => {
  const [search, setSearch] = useState("어벤져스");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log(countryList);
    refreshMoveis(search);
  }, []);

  const refreshMoveis = async (text) => {
    const result = await getMovies(text);
    console.log(result);
    setMovies(result.items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    refreshMoveis(search);
  };

  return (
    <Layout>
      <Title>Movie</Title>
      <Form>
        <Dropdown data={countryList} title="국가선택" />
        {/* <Select>
          {countryList.map(({ code, name }) => (
            <Option value={code}>{name}</Option>
          ))}
        </Select> */}
        <Input
          value={search}
          placeholder="영화 제목 입력"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSubmit}>검색</button>
      </Form>
      <MovieList data={movies} />
    </Layout>
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
const Form = styled.form`
  height: 50px;
`;
const Select = styled.select`
  height: 30px;
`;
const Option = styled.option``;
const Input = styled.input`
  height: 30px;
`;

export default Movie;
