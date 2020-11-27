import React from "react";

// 1번째 방법
// const PropsComponent = (props) => {
//   console.log(props);
//   return (
//     <>
//       <ul>
//         <li>이름 : {props.name}</li>
//         <li>나이 : {props.age}</li>
//       </ul>
//     </>
//   );
// };

// 2번째 방법 : javascript object unpacking
// const PropsComponent = (props) => {
//   const { name, age } = props; // props를 받아와서 unpacking. 푼다.
//                                //필요한 것만 가져올 수 있게
//                                // key값 지정하면 value 가져와짐
//   return (
//     <>
//       {name} / {age}
//     </>
//   );
// };

// 3번째 방법
const PropsComponent = ({ name, age }) => {
  //주의할 점!
  // 부모 컴포넌트에서 넘기는 key값과 변수로 사용할 변수명이 똑같아야 한다.
  // ex) 부모에서 {name:"abc", abe:10} -> 자식에서는 ({name, age})
  return (
    <>
      <div>
        {name} / {age}
      </div>
    </>
  );
};
export default PropsComponent;
