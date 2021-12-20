import './App.css';
import { useState, useEffect } from "react";
import Counter from "./Counter";
//Counter.js에서 Counter라는 함수형 컴포넌트를 가져올게

function App() {
  // javascript 코드
  // +를 누르면 count가 1이 증가하는 코드
  const [count, setCount] = useState(0);
  // count : 상태값
  // setCount : 상태값을 변경하는 함수
  // 0 : count의 초기값

  const handleClick = () => {
    //화살표 함수로 정의
    setCount((count) => count + 1);
    //count 값을 받아와서 count에 1을 더해주는 함수
  }

  useEffect(() => {
    console.log("count 변경");
  }, [count]);
  //count 상태가 변화할 때 콘솔을 찍어줄게

  useEffect(() => {
    console.log("App.js가 mount되었습니다.");
  }, []);


  return (
    <div>
      <Counter countName={count}/>
      {/* count변수를 countName이라는 이름으로 내려줄게 - props*/}
      <button onClick={handleClick}>+</button>
    </div>
    // JSX이다.
    // 변수를 출력하기 위해 중괄호를 이용
  );
}

export default App;
