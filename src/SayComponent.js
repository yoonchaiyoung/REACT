import React, { useState } from "react";

const SayComponent = () => {
  const [message, setMessage] = useState("");
  // useState(initialState)
  // initialState : 최초의 state가 갖고 있어야 할 값
  // 최초? 화면이 처음 그려졌을 때

  // 처음에는 message를 보여주고
  // 어떠한 event 가 일어났을 때 setMessage를 이용해서 글씨를 교체해주면 될 듯

  const [color, setColor] = useState("black");

  // 입장 event
  const onClickEnter = () => {
    // 얘가 handler
    setMessage("안녕!😁");
  };
  // 퇴장 event
  const onClickLeave = () => {
    setMessage("잘가~😥");
  };

  // 색깔 바꾸는 event
  const redClick = () => {
    setColor("red");
  };
  const greenClick = () => {
    setColor("green");
  };
  const blueClick = () => {
    setColor("blue");
  };

  // 버튼 클릭했을 때 event 결과 실행되도록
  return (
    <>
      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>

        <h1 style={{ color }}> {message} </h1>
        <button onClick={redClick}>빨강색</button>
        <button onClick={greenClick}>초록색</button>
        <button onClick={blueClick}>파랑색</button>
      </div>
    </>
  );
  // {color:color} -> {color} 가능O
  // {color:gamja} -> {gamja} 가능X
};

export default SayComponent;
// onClick={() => {
//    setColor("red")};
//}
// 이렇게 익명함수 사용가능
// 굳이 변수 만들고 할 필요 없이.
// 여기서만 사용하는 변수고 다른 곳에서는 사용하지 않는 변수이니까.
