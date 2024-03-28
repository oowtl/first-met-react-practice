import React, { useEffect, useRef, useState } from "react";
import useCounter from "./useCounter";

export default function Accommodate() {
  const [isFull, setIsFull] = useState(false);
  const MAX_CAPACITY = useRef(10);
  const [count, increase, decrease] = useCounter(0);

  useEffect(() => {
    console.log("================");
    console.log("useEffect Called");
    console.log(`isFull : ${isFull}`);
  });

  useEffect(
    function checkIsFull() {
      setIsFull(count >= MAX_CAPACITY.current);
      console.log(`Current count Value : ${count}`);
    },
    [count]
  );

  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count} 명 수용 중입니다.`}</p>

      <button onClick={increase} disabled={isFull}>
        입장
      </button>

      <button onClick={decrease}>퇴장</button>

      {isFull && <p style={{ color: "red" }}>정원이 가득 찼습니다.</p>}
    </div>
  );
}
