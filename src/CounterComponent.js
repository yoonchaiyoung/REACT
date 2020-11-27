import React, { useState } from "react";

const CounterComponent = () => {
  // let count = 0;

  // useState hooks를 활용해 component state(컴포넌트 상태값) 만들기
  // hook? component를 위한 여러가지 기능들, 함수.
  const [count, setCount] = useState(0);
  // useState() 안쪽에 어떤 것이든 다 들어갈 수 있음 ; 객체, 숫자 등등
  // count, setCount 가 나옴
  // 의미?
  // count : 현재 화면에 보이는 상태 값
  // setCount : count를 교체할 수 있는 함수. (변경X, 교체O).

  const onIncreaseButtonClick = () => {
    // event 함수
    // count = count + 1;
    // console.log(count);
    // 이렇게 하면 화면에 값이 바뀌지 않음 -> state 개념 필요
    setCount(count + 1);
  };
  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={onIncreaseButtonClick}>증가시키기</button>
      </div>
    </>
  );
};

export default CounterComponent;
