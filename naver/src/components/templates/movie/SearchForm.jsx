import styled from "styled-components";
import { useState } from "react";
import { countryList } from "../../../datas/index";
import Dropdown from "../../atoms/Dropdown";

const SearchForm = ({ onChange }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", { name: "query", value: search });
    onChange({ name: "query", value: search });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLeft>
        <Dropdown
          data={countryList}
          title="선택"
          onClick={(code) => onChange({ name: "country", value: code })}
        />
      </FormLeft>
      <FormRight>
        <Input
          value={search}
          placeholder="영화 제목 입력"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button>검색</Button>
      </FormRight>
    </Form>
  );
};

const Form = styled.form`
  height: 40px;
  display: flex;
  align-items: center;
`;
const FormLeft = styled.div`
  margin: 0 5px;
  height: 100%;
  width: 20vw;
`;
const FormRight = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;
const Input = styled.input`
  height: 100%;
  margin: 0 5px;
  flex-grow: 1;
  border-radius: 4px;
  color: #fff;
  padding: 0 10px;
  border: 1px solid #198754;
  background-color: #198754;
  ::placeholder {
    color: #fff;
    padding: 0 10px;
  }
`;
const Button = styled.button`
  color: #fff;
  border: 1px solid #198754;
  border-radius: 4px;
  background-color: #198754;
  width: 15vw;
  height: 100%;
  margin: 0 5px;
`;
export default SearchForm;
