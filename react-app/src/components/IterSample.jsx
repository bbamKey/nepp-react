import { useState, useRef } from "react";

const Iter = () => {
  const [names, setNames] = useState([
    { id: 1, text: "캡틴 아메리카" },
    { id: 2, text: "아이언맨" },
    { id: 3, text: "스파이더맨" },
    { id: 4, text: "헐크" },
    { id: 5, text: "닥터 스트레인지" },
    { id: 6, text: "블랙 위도우" },
    { id: 7, text: "호크아이" },
    { id: 8, text: "토르" },
  ]);

  const [str, setStr] = useState("");
  //const [nextId, setNextId] = useState(names.length + 1);
  const nId = useRef(names.length + 1);

  const onChange = (e) => {
    setStr(e.target.value);
  };

  const onClick = (e) => {
    console.log(str, nId.current);
    //setNames([...setNames, str]);
    if (!str) return; //early 리턴 : 들여쓰기 방지, 불필요한 코드 미실행

    const newNams = [...names, { id: nId.current, text: str }];
    setNames(newNams);
    setStr("");
    //setNextId(nextId + 1);
    nId.current++;
  };

  const onDblClick = (deleteId) => {
    const newNames = names.filter((e) => e.id !== deleteId);
    setNames(newNames);
  };

  const onKeyPress = (e) => {
    if (e.code === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <input
        name="str"
        value={str}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>입력</button>
      <ul>
        {names.map(({ id, text }, i) => (
          <div key={id}>
            <li onDoubleClick={() => onDblClick(id)}>히어로 [{text}]</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Iter;
