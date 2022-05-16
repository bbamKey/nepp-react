import styled from "styled-components";
import { useState } from "react";
import useBodyOverflowHidden from "../../hooks/useBodyOverflowHidden";

const ModalNickname = ({ onClose, onSubmit }) => {
  const [text, setText] = useState("");

  const handelSubmit = () => {
    onSubmit(text);
    onClose();
  };

  useBodyOverflowHidden();

  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <Header>
          <Title>닉네임 바꾸기</Title>
          <BtnClose onClick={onClose} />
        </Header>
        <Body>
          <input onChange={(e) => setText(e.target.value)} />
        </Body>
        <Footer>
          <BtnCancel onClick={onClose}>취소</BtnCancel>
          <BtnConfirm onClick={handelSubmit}>확인</BtnConfirm>
        </Footer>
      </Container>
    </>
  );
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

const Container = styled.div`
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 40vw;
  min-height: 40vh;
  overflow: scroll;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 15px;
`;
const Title = styled.div``;
const BtnClose = styled.button`
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em;
  color: #000;
  background: transparent
    url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3E%3Cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3E%3C/svg%3E")
    50%/1em auto no-repeat;
  border: 0;
  border-radius: 0.25rem;
  opacity: 0.5;
`;

const Body = styled.div`
  padding: 15px;
`;
const Footer = styled.div`
  border-top: 1px solid #ddd;
  padding: 15px;
  display: flex;
  justify-content: flex-end;
`;
const Btn = styled.button`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-left: 10px;
`;
const BtnCancel = styled(Btn)`
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
`;
const BtnConfirm = styled(Btn)`
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
`;

export default ModalNickname;
