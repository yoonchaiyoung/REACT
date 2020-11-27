import React, { useState } from "react";

const Hw01 = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;

  const emptyForm = {
    username: "",
    message: "",
  };

  const _onChangeHandler = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    console.log(nextForm);
    setForm(nextForm);
  };

  const onClickHandler = () => {
    alert(username + message);
    setForm(emptyForm);
  };

  return (
    <div>
      <input
        name="username"
        placeholder="이름"
        value={username}
        onChange={_onChangeHandler}
      />
      <input
        name="message"
        placeholder="메세지"
        value={message}
        onChange={_onChangeHandler}
      />
      <button onClick={onClickHandler}>확인</button>
    </div>
  );
};

export default Hw01;
