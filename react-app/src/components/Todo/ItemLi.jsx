import styled, { css } from "styled-components";

const ItemLi = ({ todo: { id, text, isChecked }, onDelete, onChecked }) => {
  return (
    <Item isChecked={isChecked}>
      <label>
        <input
          type="checkbox"
          chekced="{isChecked}"
          onChange={(e) => {
            onChecked(id, e.target.checked);
          }}
        />
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
  background: ${({ isChecked }) => isChecked && "#007c44 !important"};

  ${({ isChecked }) =>
    isChecked &&
    css`
      background: #007c44;
      ${Cont} {
        color: #ddd;
        text-decoration: line-through;
      }
    `}
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
