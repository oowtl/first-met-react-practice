import React from "react";

/**
 * useEffect 는 의존성배열의 값 변경에 의해서 실행된다.
 * 값의 변경을 감지하기 위해서 이전 의존성 배열과 현재 의존성 배열의 변경여부를 비교하게 된다.
 * 이 때 배열의 인덱스를 가지고 비교를 한다.
 *
 */

const myClosure = (function () {
  const global = { cA: [] };
  let index = 0;

  return function innerClosure() {
    const { cA: closureArray } = global;

    const prevElement = closureArray[index];
    console.log("prevElement : ", prevElement);

    let isDependenciesChanged = prevElement
      ? /**
         * 이전 값이 있다면 실행되는 조건이다. useEffect 에서는 현재 의존성배열을 인수로 받아서 사용하지만 임의로 만든 클로저 함수에서는 받지 않도록 하였기 때문에 기명의 즉시 실행 함수로 대체한다.
         */
        (function isDisagreementValue() {
          return true;
        })()
      : true;

    /**
     * 의존성 배열간의 비교를 해서 불일치 하거나 이전 값이 없을 때 실행되며 callback 함수가 실행된다.
     */
    if (isDependenciesChanged) {
      index++;
      closureArray[index] = index;
    }

    console.log("closureArray : ", closureArray);
  };
})();

export default function TestClosure() {
  const handleClick = () => {
    myClosure();
  };

  return (
    <div>
      <h1>TestClosure</h1>
      <button onClick={handleClick}>TEST</button>
    </div>
  );
}
