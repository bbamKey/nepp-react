import MyComponent from "./MyComponent";

function JsxPractice() {
  const name = "REACT";
  const age = null;
  const length = 3;

  const isShow = false;
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: "16px",
  };
  return (
    <>
      <h1 style={style}>{name} 안녕!</h1>

      <h1 className="react">{name} 안녕하세요</h1>

      <h2>잘 작동되니?</h2>

      {/* 조건부연산자 */}
      {name === "REACT" ? <h3>잘 되지~</h3> : <h3>헐. 리액트가 아니잖아?!</h3>}
      {isShow && <h3> &&연산자 잘 되지~</h3>}
      {age || <h3> 있다 없다 </h3>}
      {length >= 3 ? <h3>33</h3> : <h3>!3</h3>}

      <br />
      <input value="HIHI" />

      <MyComponent name="정동글" age="33">
        <span>리액트 개발</span>
        {/* <input type="file" /> */}
      </MyComponent>
    </>
  );
}

export default JsxPractice;
