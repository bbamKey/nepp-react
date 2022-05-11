import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";
import { accordionData, carouselData } from "../../datas/bootstrap";

const Bootstrap = () => {
  return (
    <>
      <Carousel data={carouselData} />
      <Accordion data={accordionData} />
      <Dropdown />
    </>
  );
};

export default Bootstrap;
