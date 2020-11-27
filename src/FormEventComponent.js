import React, { useState } from "react";

// 이번 state : 객체
const FormEventComponent = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  }); // 이번에는 useState() 안에 객체가 들어간다.
  // useState가 2개를 출력해준다. form이라는 변수, setForm이라는 함수.

  const { username, message } = form;
  // javascript 객체 unpacking  // 풀었음.
  // username, message : state
  // 밑의 input의 value로 사용하겠다.

  // username, message 이 바뀌면 아래 input의 value도 바뀌어야 한다.

  // 만약에 const {username, message} = form; 을 안할거면
  // 밑에 input value에 form.username, form.message를 각각 넣으면 됨.

  const _onChangeHandler = (e) => {
    const nextForm = {
      ...form, // ...(spread 연산자) : 전개 ; 원본을 복사하는 것  // numpy 할 때 나왔었음.
      // ...form : 원본 객체의 모든 내용을 복사하겠다.  // 하지만 같은 객체는 아님. 다른 객체. deep copy.
      // state : 값의 변경X, 새로운 걸 만들어서 교체O.
      // 바뀔 때마다 ...form 에는 이전 state 값이 들어있음.
      // 이전 state 값을 모두 다 복사해주고 밑에서 수정함.

      // 만약에 ...form을 안하면 변경된 이름만 갖고 메세지 자체는 사라지게 됨.
      // 즉, {name:변경된 이름} 이렇게 message라는 key자체가 사라짐!!!

      // 원본에 대한 복사본 만들고 수정할 거 하고 새로 집어넣는 과정.
      [e.target.name]: e.target.value, // 필요한 부분을 수정하는 부분
      // e : event 객체 ; event에 대한 모든 정보가 다 들어있음
      // target : event가 발생되는 element
      // e.target : 현재 사용자가 키보드로 변경하고 있는 친구
      // e.target.name : 그 이름. username
      // e.target.value : 현재 키보드로 입력하고 있는 값

      // 계속 입력할 때마다 새로운 form이 만들어져서 바로바로 실시간으로 교체되고 있다는 것.
    };
    console.log(nextForm);
    setForm(nextForm); // state 변경 함수. 를 이용해서 교체
    // 현재 상태를 최신의 상태로 변경하겠다.
  };

  return (
    <div>
      <h1>자바스크립트 객체 state, 이벤트 연습</h1>
      <input // event target1
        name="username"
        placeholder="사용자명"
        value={username} // state의 key값이랑 맞춰준다.
        onChange={_onChangeHandler}
      />
      <input // event target2
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message} // state의 key값이랑 맞춰준다.
        onChange={_onChangeHandler}
      />
      <button>확인</button>
    </div>
  );
};

export default FormEventComponent;

// 키보드로 한 글자 한 글자 칠 때마다 상태가 변화됨.
