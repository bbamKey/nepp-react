import { useRef, useState } from "react";
import styled from "styled-components";
import { postPosts } from "../../apis/post";
import { Backdrop, ModalContainer } from "../atoms";

const ModalAddPost = ({ onClose }) => {
  const [imgPrev, setImgPrev] = useState("");
  const [file, setFile] = useState("");
  const [content, setContent] = useState("");
  const fileEl = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImgPrev(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    postPosts({ file, content });
    onClose();
  };

  return (
    <>
      <Backdrop></Backdrop>
      <Container>
        <Header>
          새 게시물 만들기
          <ButtonX onClick={onClose}>X</ButtonX>
        </Header>
        <Main>
          {!imgPrev && (
            <>
              <Guide>사진과 동영상을 여기에 끌어다 놓으세요</Guide>
              <BtnUpload onClick={() => fileEl.current.click()}>
                컴퓨터에서 선택
              </BtnUpload>
              <InputFile
                type="file"
                ref={fileEl}
                accept="image/*"
                onChange={handleFileChange}
              />
            </>
          )}
          {imgPrev && <ImgPreview src={imgPrev} />}
          <Textarea
            rows="3"
            onChange={(e) => setContent(e.target.value)}
          ></Textarea>
          <BtnSubmit onClick={handleSubmit}>업로드</BtnSubmit>
        </Main>
      </Container>
    </>
  );
};

const Container = styled(ModalContainer)`
  background-color: #fff;
  width: 583px;
  height: 583px;
`;

const Header = styled.header`
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  border-bottom: 1px solid #bbb;
  padding: 5px 20px;
`;

const Main = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
`;
const Guide = styled.p`
  font-size: 24px;
`;

const BtnUpload = styled.button`
  background: #0095f6;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
`;
const InputFile = styled.input`
  display: none;
`;
const ImgPreview = styled.img`
  width: 100%;
  height: 60%;
  object-fit: contain;
`;
const ButtonX = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  font-size: 20px;
`;

const Textarea = styled.textarea``;
const BtnSubmit = styled.button``;

export default ModalAddPost;
