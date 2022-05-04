import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Title>일정관리</Title>
    </>
  );
};
const Title = styled.div`
  background-color: rgb(116, 74, 3);
  font-size: 20px;
  color: #fff;
  padding: 15px 0;
  text-align: center;
`;
export default Header;
