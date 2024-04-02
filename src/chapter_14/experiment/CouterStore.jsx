import React from "react";
import { createStore } from "./store";
import { UseStore } from "./hooks/UseStore";

const store = createStore({ count: 1 });

function Counter1() {
  const [state, setState] = UseStore(store);

  const handleClick = () => {
    setState((prevState) => ({ count: prevState.count + 1 }));
  };

  return (
    <>
      <h3>Counter1 : {state.count}</h3>
      <button onClick={handleClick}> + </button>
    </>
  );
}

function Counter2() {
  const [state, setState] = UseStore(store);

  const handleClick = () => {
    setState((prevState) => ({ count: prevState.count + 1 }));
  };

  return (
    <>
      <h3>Counter2 : {state.count}</h3>
      <button onClick={handleClick}> + </button>
    </>
  );
}

export default function CouterStore() {
  return (
    <div>
      <Counter1 />
      <Counter2 />
    </div>
  );
}
