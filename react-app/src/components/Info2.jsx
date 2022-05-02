import { useReducer } from "react";

const reducer = (state, action) => {
  return { ...state, [action.name]: action.value };
};

const Info2 = () => {
  const [{ name, nick }, dispatch] = useReducer(reducer, {
    name: "",
    nick: "",
  });

  const onChange = (e) => {
    dispatch(e.target);
  };
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
