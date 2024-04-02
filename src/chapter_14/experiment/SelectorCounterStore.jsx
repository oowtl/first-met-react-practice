import React, { useCallback, useEffect } from "react";
import { createStore } from "./store";
import { UseStoreSelector as useStoreSelector } from "./hooks/UseStoreSelctor";

const store = createStore({ count: 0, text: "hi" });

function Counter() {
  const counter = useStoreSelector(
    store,
    useCallback((state) => state.count, [])
  );

  const handleClick = () => {
    store.set((prev) => ({ ...prev, count: prev.count + 1 }));
  };

  useEffect(() => {
    console.log("Counter Rendered");
  });

  return (
    <>
      <h3>{counter}</h3>
      <button onClick={handleClick}>+</button>
    </>
  );
}

const textSelector = (state) => state.text;

function TextEditor() {
  const text = useStoreSelector(store, textSelector);

  useEffect(() => {
    console.log("Counter Rendered");
  });

  const handleChange = (e) => {
    store.set((prev) => ({ ...prev, text: e.target.value }));
  };

  return (
    <>
      <h3>{text}</h3>
      <input type="text" value={text} onChange={handleChange} />
    </>
  );
}

export default function SelectorCounterStore() {
  return (
    <div>
      <h1>SelectorCounterStore</h1>
      <Counter />
      <TextEditor />
    </div>
  );
}
