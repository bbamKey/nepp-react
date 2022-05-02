import { useState } from "react";
import Info from "./Info";

const Mount = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <h1>Mount.jsx</h1>
      <button onClick={(e) => setVisible(!visible)}>보이기</button>
      {visible && <Info />}
    </>
  );
};
export default Mount;
