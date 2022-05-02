//props 첫번째 인자에 props들이 있다.

// const MyComponent = (param) => {
//   return <div>안녕하세요, 제이름은 {param.name}입니다</div>;
// };

function MyComponent({ name, age, children }) {
  //const { name, age, children } = param;

  return (
    <div>
      {/* <h1>안녕하세요, 제 이름은 {param.name}입니다</h1> */}
      <h1>안녕하세요, 제 두번째 이름은 {name}입니다</h1>

      {/* <h2>제 나이는 {param.age}살 입니다</h2> */}
      <h2>제 두번째 나이는 {age}살 입니다</h2>

      {/* <h1>제 취미는 {param.children}입니다</h1> */}
      <h1>제 두번째 취미는 {children}입니다</h1>
    </div>
  );
}

export default MyComponent;
