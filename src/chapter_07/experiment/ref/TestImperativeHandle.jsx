import React, { useRef, useImperativeHandle, forwardRef } from "react";

/**
 * useImperativeHandle 을 통해서 변경한 ref 는 다른 컴포넌트와 공유된다.
 * 자식 컴포넌트에서 ref 를 변경하면 부모 컴포넌트에서도 변경된 ref의 내용이 적용된다.
 * => 의도하지 않은 변경에 주의해서 사용하는 것이 좋을 것 같다.
 */
const ChildComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      alert: () => alert("Hello my input ref!"),
    };
  });

  const handleClick = () => {
    console.log(ref);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Parent Log ref</button>
    </div>
  );
});

export default function TestImperativeHandle() {
  const inputRef = useRef();

  const handleClickLogRef = () => {
    console.log(inputRef);
  };

  const handleClickAlert = () => {
    inputRef.current.alert();
  };

  return (
    <div>
      <h1>useImperativeHandle</h1>

      <button onClick={handleClickLogRef}>Parent Log ref</button>
      <button onClick={handleClickAlert}>Alert Button</button>
      <br />
      <input type="text" ref={inputRef} />
      <ChildComponent ref={inputRef} />
    </div>
  );
}
