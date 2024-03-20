import React, { Component } from "react";

export default class ConfirmButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConfirmed: false,
    };

    // 1. 바인딩한 함수객체로 교체하기
    // this.handleConfirm = this.handleConfirm.bind(this);
  }

  // 1. 바인딩한 함수객체로 교체하기
  // handleConfirm() {
  //   this.setState((prevState) => ({ isConfirmed: !prevState.isConfirmed }));
  // }

  // 2. 클래스 필드로 이벤트 핸들러 정의하기 (arrow function)
  // handleConfirm = () => {
  //   this.setState((prevState) => ({ isConfirmed: !prevState.isConfirmed }));
  // };

  // 3. 함수 선언하기
  handleConfirm() {
    this.setState((prevState) => ({ isConfirmed: !prevState.isConfirmed }));
  }

  render() {
    return (
      // <button onClick={this.handleConfirm}>
      // 3. 함수 선언하기
      <button
        onClick={() => {
          this.handleConfirm();
        }}
      >
        {this.state.isConfirmed ? "ON" : "OFF"}
      </button>
    );
  }
}
