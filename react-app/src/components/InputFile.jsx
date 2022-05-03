import { useRef } from "react";

const InputFile = () => {
  const inputFile = useRef(null);

  return (
    <>
      <h1>InputFile.jsx</h1>
      <input type="file" style={{ display: "none" }} ref={inputFile} />
      <button onClick={() => inputFile.current.click()}>업로드</button>
    </>
  );
};

export default InputFile;
