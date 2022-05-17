import styled, { css } from "styled-components";
import { useState, useEffect, useRef } from "react";

const Dropdown = ({ data, title }) => {
  const [isShow, setIsShow] = useState(false);
  const wrapEl = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (!wrapEl.current.contains(e.target)) setIsShow(false);
      //if (e.target !== wrapEl.current) setIsShow(false);
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  const handleShow = (e) => {
    e.preventDefault();
    setIsShow((prev) => !prev);
  };

  const handleClick = (e) => {
    setIsShow((prev) => !prev);
  };

  return (
    <Wrapper isShow={isShow} ref={wrapEl}>
      <Button onClick={handleShow}>{title}</Button>
      <Menu>
        {data.map(({ code, name }) => (
          <Item key={code} onClick={() => handleClick(code)}>
            {name}
          </Item>
        ))}
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  ${({ isShow }) =>
    !isShow
      ? css`
          ${Menu} {
            display: none;
          }
        `
      : css`
          ${Button} {
            :after {
              transform: rotate(-180deg);
            }
          }
        `}
`;
const Button = styled.button`
  border: none;
  border-radius: 4px;
  background: #198754;
  color: #fff;
  padding: 10px 12px;
  font-size: 20px;
  :after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
    transition: all 0.2s;
    margin: -3px 0px -3px 6px;
  }
`;
const Menu = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 115px;
  overflow: hidden;
  list-style: none;
  z-index: 1;
  background-color: #fff;
`;
const Item = styled.li`
  padding: 10px 12px;
  :nth-child(even) {
    background-color: #eee;
  }
  &:hover {
    background-color: #222;
    color: #fff;
  }
  & + & {
    border-top: 1px solid #ddd;
  }
`;

export default Dropdown;
