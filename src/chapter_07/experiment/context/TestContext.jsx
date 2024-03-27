import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * propsDrilling 과 useContext 의 자식 컴포넌트가 부모 컴포넌트를 렌더링했을 때 렌더링되는지 테스트하는 코드
 * 렌더링이 트리거되는 조건에 부합하여 렌더링이 된다. => 자식 컴포넌트의 변화가 없을지라도 부모 컴포넌트가 렌더링되면 같이 렌더링 된다.
 *
 */
const myContext = createContext();

function ContextProvider({ children, text }) {
  return (
    <myContext.Provider value={{ hello: text }}>{children}</myContext.Provider>
  );
}

function useMyContext() {
  const context = useContext(myContext);

  if (context === undefined) {
    throw new Error(
      "useContext 는 Context Provider 내부에서만 사용할 수 있습니다."
    );
  }

  return context;
}

const GrandChildComponent = () => {
  const { hello } = useMyContext();
  useEffect(() => {
    console.log("RENDERING : GrandChildComponent");
  });

  return <h3>{hello}</h3>;
};

const ChildComponent = () => {
  useEffect(() => {
    console.log("RENDERING : ChildComponent");
  });
  return <GrandChildComponent />;
};

export default function TestContext() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("RENDERING : ParentComponent");
  });

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <ContextProvider text="react">
        TestContext
        <input type="text" value={text} onChange={handleChange} />
        <ChildComponent />
      </ContextProvider>
    </div>
  );
}
