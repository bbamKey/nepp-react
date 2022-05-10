import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import { accordionData } from "../../datas/bootstrap";
const Bootstrap = () => {
  return (
    <>
      <Accordion data={accordionData} />
      <Dropdown />
    </>
  );
};

export default Bootstrap;
