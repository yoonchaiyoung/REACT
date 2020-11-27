import React from "react";
import CounterComponent from "./CounterComponent";
import FormEventComponent from "./FormEventComponent";
import MyComponent from "./MyComponent";
import PropsComponent from "./PropsComponent";
import SayComponent from "./SayComponent";

function App() {
  return (
    // <></> : Fragment
    <>
      {/* <div>hello</div>
      <MyComponent />
      <PropsComponent name={"ChaiYoung Yoon"} age={23} />
      <CounterComponent /> */}
      {/* <SayComponent /> */}
      <FormEventComponent />
    </>
  );
}

export default App;
