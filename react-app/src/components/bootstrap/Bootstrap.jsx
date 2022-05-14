import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";
import ModalFirst from "./ModalFirst";
import { accordionData, carouselData } from "../../datas/bootstrap";
import { useState } from "react";

const Bootstrap = () => {
  const [isShowModalFirst, setIsShowModalFirst] = useState(false);
  const handelModalFirst = (is) => {
    setIsShowModalFirst(is);
  };
  return (
    <>
      <button onClick={() => handelModalFirst(true)}>ModalFirst</button>
      {isShowModalFirst && (
        <ModalFirst onClose={() => handelModalFirst(false)} />
      )}
      <Carousel data={carouselData} type="opacity" />
      <Carousel data={carouselData} type="trans" />
      <Accordion data={accordionData} />
      <Dropdown />
    </>
  );
};

export default Bootstrap;
