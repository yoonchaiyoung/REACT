import React, { useState } from "react";

const IterationObjectComponent = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "별" },
    { id: 3, text: "달" },
    { id: 4, text: "은하수" },
  ]);
  // useState에 배열이 들어간다.

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  // event : 입력했을 때 inputText에 값 집어넣기
  const _handleInputTextChange = (e) => setInputText(e.target.value);

  // event : 추가 버튼 클릭했을 때
  const _handleAddButtonClick = () => {
    // state
    // 원본 복사 -> 원소 추가 -> 기존 state에 덮어쓴다.(set~~)
    // push, concat 차이 있음
    // push : 원본 배열 맨 뒤에 원소 추가
    // concat : 맨 뒤에 원소 추가한 **새로운** 배열 생성 -> concat을 사용해야 함.

    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });

    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const _handleRemoveItem = (id) => {
    // ex) 1번 삭제 -> 1번빼고 다 살려라
    // 이런 걸 필터링.이라고 함.
    // 넘어오는 id만 빼고 다 살리겠다.

    const nextNames = names.filter((name) => name.id !== id); // 필터링
    setNames(nextNames);
    // map이랑 쓰는 법은 비슷하지만 효과는 다름.
  };

  return (
    <div>
      <input type="text" onChange={_handleInputTextChange} value={inputText} />
      <button onClick={_handleAddButtonClick}>추가</button>
      <ul>
        {names.map((name) => (
          //   <li key={name.id} onDoubleClick={_handleRemoveItem}>  // 이렇게 하면 event 객체만 넘어감.
          // id 객체를 같이 넘겨줘야 한다. 바로 아래처럼.
          <li key={name.id} onDoubleClick={() => _handleRemoveItem(name.id)}>
            {name.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IterationObjectComponent;

// 중괄호 안쪽 : javascript 코드 영역
//   names.map((name)=>{})
// {}가 있다? -> 로직. 여러 줄의 코드가 들어가겠다.
// console.log, if, for문 다 들어감.
// {} : 문법들을 의미.
// return만 할 때는 소괄호 이용

// 중괄호 쓰려면
// {names.map((name) => {
//     return <li>{name.text}</li>;
// }

// 에러.
// key가 중복됨.
// <li key={name.id}> 로 key를 달아주면 해결.

// 삭제는 어떻게?
// key={name.id} 는 언제나 고유하니까 그걸 힌트로 삭제..
