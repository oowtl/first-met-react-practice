import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import Library from "./chapter_03/Library";
// import Clock from "./chapter_04/Clock";
// import CommentList from "./chapter_05/CommentList";
// import NotificationList from "./chapter_06/NotificationList";
// import TestUseState from "./chapter_07/experiment/TestUseState";
// import TestClosure from "./chapter_07/experiment/TestClosure";
// import TestContext from "./chapter_07/experiment/context/TestContext";
import TestPropsDrilling from "./chapter_07/experiment/context/ComparePropsDrilling";
// import ConfirmButton from "./chapter_08/ConfirmButton";
// import ConfirmButtonFC from "./chapter_08/ConfirmButton";
// import LandingPage from "./chapter_09/LandingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

// chapter 03
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

// chapter 04
// TODO : index 보다 더 좁은 범위에서 setInterval 실행시키기
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

// chapter 05
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// );

// chapter 06
// root.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>
// );\

// chapter 07 : React hooks
// TEST useState
// root.render(
//   <React.StrictMode>
//     <TestUseState />
//   </React.StrictMode>
// );

// TEST closure
// root.render(
//   <React.StrictMode>
//     <TestClosure />
//   </React.StrictMode>
// );

// TEST useContext
// root.render(
//   <React.StrictMode>
//     <TestContext />
//   </React.StrictMode>
// );

// TEST propsDrilling
root.render(
  <React.StrictMode>
    <TestPropsDrilling />
  </React.StrictMode>
);

// chapter 08
// root.render(
//   <React.StrictMode>
//     <>
//       <ConfirmButton />
//       <ConfirmButtonFC />
//     </>
//   </React.StrictMode>
// );

// chapter 09
// root.render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
