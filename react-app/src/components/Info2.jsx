import { useInputs } from "./hooks/useInputs";

const Info2 = () => {
  const [{ name, nick }, onChange] = useInputs({ name: "", nick: "" });

  return (
    <>
      <h1>Info2.jsx</h1>
      <input name="name" value={name} onChange={onChange} />
      <input name="nick" value={nick} onChange={onChange} />
      <h2>이름 : {name}</h2>
      <h2>닉넴 : {nick}</h2>
    </>
  );
};
export default Info2;
