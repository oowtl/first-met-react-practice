import React from "react";

export default function BookElement(props) {
  const { name, numOfPage } = props;
  return React.createElement("div", null, [
    React.createElement("h1", null, `이 책의 이름은 ${name} 입니다.`),
    React.createElement(
      "h2",
      null,
      `이 책은 총 ${numOfPage} 페이지로 이뤄져 있습니다.`
    ),
  ]);
}
