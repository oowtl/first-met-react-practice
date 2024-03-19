import React from "react";
import Comment from "./Comment";

const comments = [
  { name: "박준홍", comment: "안녕하세요 반가와용" },
  { name: "투썸맨", comment: "투썸플레이스에 사람이 많아요" },
  { name: "투썸가이", comment: "리액트 공부하는 중~" },
];

export default function CommentList(props) {
  return (
    <div>
      {/* <Comment name="박준홍" comment="안녕하세요 반가와용" />
      <Comment name="투썸맨" comment="투썸플레이스에 사람이 많아요" />
      <Comment name="투썸가이" comment="리액트 공부하는 중~" /> */}

      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}
