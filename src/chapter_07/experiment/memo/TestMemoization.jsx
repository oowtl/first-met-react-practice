import React, { useMemo, useState } from "react";
import MemoCompoenent from "./MemoCompoenent";
import UseMemoComponent from "./UseMemoComponent";

export default function TestUseMemo() {
  const [changeProps, setChangeProps] = useState(false);
  const [changeState, setChangeState] = useState(false);

  /**
   * useMemo 는 값을 반환하기 때문에 변수에 할당해서 사용해야한다.
   * JSX 문법을 사용해서 컴포넌트를 추가할 수 없다.
   */
  const useMemoComponent = useMemo(() => {
    return <UseMemoComponent changeProps={changeProps} />;
  }, [changeProps]);

  const handleClickChangeProps = () => {
    setChangeProps((prev) => !prev);
  };

  const handleClickChageState = () => {
    setChangeState((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      <h1>TestUseMemo</h1>

      <h2>Props : {changeProps ? "true" : "false"}</h2>
      <button onClick={handleClickChangeProps}>Change Props</button>

      <h3>React.memo</h3>
      <MemoCompoenent changeProps={changeProps} />
      <br />
      <h3>useMemo</h3>
      {useMemoComponent}
      <br />

      <hr />
      <h2>State : {changeState ? "true" : "false"}</h2>
      <button onClick={handleClickChageState}>Change State</button>
    </div>
  );
}
