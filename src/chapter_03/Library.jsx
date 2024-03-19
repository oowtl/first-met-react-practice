import React from "react";
import Book from "./Book";
import BookElement from "./BookElement";

function Library(props) {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <BookElement name="처음 만난 리액트" numOfPage={500} />
    </div>
  );
}

export default Library;
