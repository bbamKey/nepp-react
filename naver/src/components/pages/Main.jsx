import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <h1>
        영화 & 책 <br />
        검색 사이트
      </h1>
      <Link to="/movie">
        <Button>영화</Button>
      </Link>
      <Link to="/book">
        <Button>책</Button>
      </Link>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 200px;
  height: 80px;
  margin: 20px auto;
  background: #fff;
  border: 1px solid #ddd;
  font-size: 20px;
`;

export default Main;
