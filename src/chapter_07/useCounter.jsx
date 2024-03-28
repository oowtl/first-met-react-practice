import { useState } from "react";

/**
 * 커스텀 훅이 반환하는 것에 제한이 없다는 것이 중요한 것 같다.
 * 배열을 반환하던지 객체를 반환하던지 state 를 반환하던지 필요에 따라서 할 수 있다.
 *
 * @param {number} initialValue
 * @returns
 */
export default function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increase = () =>
    setCount((count) => {
      return count + 1;
    });

  const decrease = () =>
    setCount((count) => {
      return Math.max(count - 1, 0);
    });
  return [count, increase, decrease];
}
