import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";
import ModalFirst from "./ModalFirst";
import ModalNickname from "./ModalNickname";
import { accordionData, carouselData } from "../../datas/bootstrap";
import { useState } from "react";

const Bootstrap = () => {
  const [isShowModalFirst, setIsShowModalFirst] = useState(false);
  const [name, setName] = useState("홍길동");
  const handleModalFirst = (is) => {
    setIsShowModalFirst(is);
  };
  const handleChangeName = (txt) => {
    console.log("handleChangeName", txt);
    setName(txt);
  };

  const [isShowModalNickname, setIsShowModalNickname] = useState(false);
  const [nickname, setNickname] = useState("의적");
  const handleModalNickname = (is) => {
    setIsShowModalNickname(is);
  };
  const handleChangeNickname = (txt) => {
    console.log("handleChangeNickname", txt);
    setNickname(txt);
  };

  return (
    <>
      <h1>이름 : {name}</h1>
      <h1>닉네임 : {nickname}</h1>
      <button onClick={() => handleModalFirst(true)}>ModalFirst</button>
      {isShowModalFirst && (
        <ModalFirst
          onClose={() => handleModalFirst(false)}
          onSubmit={(v) => handleChangeName(v)}
        />
      )}
      <button onClick={() => setIsShowModalNickname(true)}>
        ModalNickname
      </button>
      {isShowModalNickname && (
        <ModalNickname
          onClose={() => handleModalNickname(false)}
          onSubmit={(v) => handleChangeNickname(v)}
        />
      )}
      <Carousel data={carouselData} type="opacity" />
      <Accordion data={accordionData} />
      <Dropdown />
    </>
  );
};

export default Bootstrap;
