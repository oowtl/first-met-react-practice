import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SelectorCounterStore from "./chapter_14/experiment/SelectorCounterStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

// chapter 14

// TEST STATE STORE : 컴포넌트 외부에서 상태 관리
// root.render(
//   <React.StrictMode>
//     <CouterStore />
//   </React.StrictMode>
// );

// TEST STATE STORE : 객체 변경 감지에 따른 리렌더링
root.render(
  <React.StrictMode>
    <SelectorCounterStore />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
