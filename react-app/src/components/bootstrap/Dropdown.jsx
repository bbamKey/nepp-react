import styled from "styled-components";

const Dropdown = () => {
  return (
    <Wrapper>
      <Button>Dropdown Button</Button>
      <Menu>
        <Item>#1</Item>
        <Item>#2</Item>
        <Item>#3</Item>
        <Item>#4</Item>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin: 40px;
`;
const Button = styled.button`
  border: none;
  border-radius: 4px;
  background: #198754;
  color: #fff;
  padding: 15px;
  font-size: 20px;
`;
const Menu = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #efefef;
  padding: 15px;
`;
const Item = styled.li`
  list-style: none;
`;

export default Dropdown;
