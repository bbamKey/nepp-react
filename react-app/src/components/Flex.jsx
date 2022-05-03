import styled from "styled-components";

const Flex = () => {
  return (
    <>
      <h1>Flex.jsx</h1>
      <Parent>
        <Box />
        <Box borderBox />
        <Box />
      </Parent>
    </>
  );
};
const Parent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  background: red;
  width: 200px;
  height: 200px;
  margin: 20px;
  padding: 50px;
  box-sizing: ${({ borderBox }) => borderBox && "border-box"};
`;

export default Flex;
