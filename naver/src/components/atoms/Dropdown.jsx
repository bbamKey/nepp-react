import styled, { css } from "styled-components";
import { useState, useEffect, useRef } from "react";

const Dropdown = ({ data, title, onClick }) => {
  const [isShow, setIsShow] = useState(false);
  const [name, setName] = useState(title);
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

  const handleClick = (name, code) => {
    setIsShow((prev) => !prev);
    setName(name);
    onClick(code);
  };

  return (
    <Wrapper isShow={isShow} ref={wrapEl}>
      <Button onClick={handleShow}>{name}</Button>
      <Menu>
        <Item onClick={() => handleClick("전체", "")}>전체</Item>
        {data.map(({ code, name }) => (
          <Item key={code} onClick={() => handleClick(name, code)}>
            {name}
          </Item>
        ))}
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
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
  width: 100%;
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
  width: 100%;
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
