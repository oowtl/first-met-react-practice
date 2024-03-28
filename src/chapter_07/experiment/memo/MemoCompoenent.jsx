import React, { useEffect } from "react";

/**
 * React.memo 는 컴포넌트를 메모이제이션 하는 것을 명시적으로 알려줄 수 있다.
 * 따라서 컴포넌트를 메모이제이션할 때는 useMemo 보다는 React.memo 를 활용하는 것이 좋다.
 */
export default React.memo(function MemoCompoenent(props) {
  useEffect(() => {
    console.log("MemoComponent rendering");
  });

  return <h4>MemoComponent : {props.changeProps ? "true" : "false"}</h4>;
});
