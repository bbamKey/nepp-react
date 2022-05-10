import styled, { css } from "styled-components";
import { useState } from "react";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (i) => {
    setActiveIndex(activeIndex === i ? -1 : i);
  };

  return (
    <List>
      {data.map(({ id, title, content }, i) => (
        <Item key={id} isActive={activeIndex === i}>
          <Header onClick={() => handleClick(i)}>
            [{id}] {title}
            <BtnArrow></BtnArrow>
          </Header>
          <Body>{content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.div`
  margin: 40px;
  border: 1px #d4d4d4 solid;
  border-radius: 4px; ;
`;
const Item = styled.div`
  & + & {
    border-top: 1px #d4d4d4 solid;
  }
  ${({ isActive }) =>
    isActive
      ? css`
          ${Header} {
            background: #001438;
            color: #fff;
          }
          ${BtnArrow} {
            transform: rotate(-180deg);
            background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
          }
        `
      : css`
          ${Body} {
            display: none;
          }
        `}
`;
const Header = styled.div`
  padding: 20px;
  background: #e9f1ff;
  color: #377ffc;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  justify-content: space-between;
`;
const BtnArrow = styled.button`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: none;
  transition: all 0.5s;
  background: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
`;
const Body = styled.div`
  padding: 20px;
  border-top: 1px #d4d4d4 solid;
`;

export default Accordion;
