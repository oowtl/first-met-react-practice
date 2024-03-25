import React, { useState } from "react";
/**
 * 리액트 딥다이브 예제 실험
 * useState 는 어떻게 렌더링을 트리거하는가?
 */

// useState 를 사용하지 않고 리액트의 렌더링을 트리거할 수 있는가? => 안됨 => 리액트에서 렌더링을 트리거할 수 있는 조건이 있는데 간략하게 서술하자면, state나 props 가 변경되거나 강제로 리렌더링을 하는 함수를 실행하는 경우에서만 렌더링이 실행된다.
// export default function TestUseState() {
//   let testState = "Hello";

//   console.log("Render test!!");

//   const handleClick = () => {
//     testState = "hi Redering!!";
//   };

//   return (
//     <div>
//       <h1>TestUseState : {testState}</h1>
//       <button onClick={handleClick}>TEST</button>
//     </div>
//   );
// }

// useState 의 setter 를 활용한다면 렌더링이 될까? => 안됨 => 리액트는 렌더링을 할 때 함수형의 return, 클래스형의 render 함수의 결과물을 기준으로 하는 리액트 트리를 비교하여 렌더링을 결정한다.
export default function TestUseState() {
  const [, triggerRendering] = useState();

  let testState = "hello";

  console.log("Render test!!");

  const handleClick = () => {
    testState = "hi Redering!!";
    triggerRendering();
  };
  return (
    <div>
      <h1>TestUseState : {testState}</h1>
      <button onClick={handleClick}>TEST</button>
    </div>
  );
}
