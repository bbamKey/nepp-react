//props 첫번째 인자에 props들이 있다.

// const MyComponent = (param) => {
//   return <div>안녕하세요, 제이름은 {param.name}입니다</div>;
// };

function MyComponent(param, age) {
  return (
    <div>
      <h1>안녕하세요, 제이름은 {param.name} 입니다</h1>
      <h2>{param.age}살 입니다</h2>
    </div>
  );
}

export default MyComponent;
