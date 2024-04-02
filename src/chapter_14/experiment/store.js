// state 를 외부에서 관리하기 위한 함수
export const createStore = (initialState) => {
  // initialState 를 함수로 초기화할 때는 실행시켜준다.
  let state =
    typeof initialState !== "function" ? initialState : initialState();

  // 어떠한 타입도 다 넣어줄 수 있는 Set 에 callback 함수를 할당한다.
  const callbacks = new Set();

  // 최신 state 리턴
  const get = () => state;

  // state 변경
  const set = (nextState) => {
    state = typeof nextState === "function" ? nextState(state) : nextState;

    // 변경에 따른 callback 함수 실행
    callbacks.forEach((callback) => callback());
    return state;
  };

  // callback 함수 등록
  const subscribe = (callback) => {
    callbacks.add(callback);

    // 클린업 함수 리턴
    return () => {
      callbacks.delete(callback);
    };
  };

  return { get, set, subscribe };
};
