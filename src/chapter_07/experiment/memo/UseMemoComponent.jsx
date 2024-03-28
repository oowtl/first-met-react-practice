import React, { useEffect } from "react";

export default function UseMemoComponent(props) {
  useEffect(function renderingEffect() {
    console.log("useMemoComponent Rendering");
  });

  return <h4>UseMemoComponent : {props.changeProps ? "true" : "false"}</h4>;
}
