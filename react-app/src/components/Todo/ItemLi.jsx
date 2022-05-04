import styled from "styled-components";

const ItemLi = ({ todo, onDelete }) => {
  const { id, text } = todo;
  return (
    <Item>
      <label>
        <input type="checkbox" />
        <Cont>
          [{id}] {text}
        </Cont>
      </label>
      <BtnDelete onClick={() => onDelete(id)}>-</BtnDelete>
    </Item>
  );
};

const Item = styled.li`
  height: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & + & {
    border-top: 1px solid #ddd;
  }
  :nth-child(2n) {
    background: #efefef;
  }
`;
const Cont = styled.span`
  flex: 1;
  margin-left: 15px;
`;
const BtnDelete = styled.button`
  width: 25px;
  height: 25px;
  font-size: 20px;
  border-radius: 55px;
  color: #fff;
  background-color: red;
  border: none;
  cursor: pointer;
`;
export default ItemLi;
