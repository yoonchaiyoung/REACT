import React, { useState } from "react";

const CounterComponent = () => {
  // let count = 0;
  // component와는 상관 X 그냥 변수

  // useState hooks를 활용해 component state(컴포넌트 상태값) 만들기
  // hook? component를 위한 여러가지 기능들, 함수.
  const [count, setCount] = useState(0);
  // useState() 안쪽에 어떤 것이든 다 들어갈 수 있음 ; 문자열, 객체, 숫자 등등
  // count, setCount 가 나옴
  // 의미?
  // count : 현재 화면에 보이는 상태 값
  // setCount : count를 교체할 수 있는 함수. (변경X, 교체O).

  // state를 대변할 수 있는 useState를 만듦.

  const onIncreaseButtonClick = () => {
    // event 함수
    // count = count + 1;
    // console.log(count);
    // 이렇게 하면 화면에 값이 바뀌지 않음 -> state 개념 필요
    setCount(count + 1);
    // setCount를 호출할 때 교체작업이 일어남.
    // console.log(count); 여기서 찍으면 반영 안 됨.
  }; // 이 괄호가 끝나야지 반영이 됨.
  // console.log(count); 이렇게 event 함수가 끝나고 나서 찍어야지 반영이 됨.

  // state가 바뀌게 되면 화면을 다시 그림.
  // shadow DOM이 그림.
  // hooks를 이용해서 (use~~로 시작함) hooks가 끝나고 난 후 -> 다시 그림

  // 화면 최적화 : 필요없는 case를 다 제거하고, 꼭 화면을 다시 그려야 하는 것만 다시 그림.
  // 화면을 굳이 매번 다시 그릴 필요 없이, 변경됬을 때만 다시 그려야하는 작업들이 있으니까.

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
