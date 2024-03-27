import React, { useEffect, useState } from "react";

const GrandChildComponent = (props) => {
  useEffect(() => {
    console.log("RENDERING : GrandChildComponent");
  });

  return <h3>{props.propValue.propValue.hello}</h3>;
};

const ChildComponent = (props) => {
  useEffect(() => {
    console.log("RENDERING : ChildComponent");
  });
  return <GrandChildComponent propValue={props} />;
};

export default function ComparePropsDrilling() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("RENDERING : ParentComponent");
  });

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>ComparePropsDrilling</h1>
      <input type="text" onChange={handleChange} value={text} />

      <ChildComponent propValue={{ hello: "react" }} />
    </div>
  );
}
