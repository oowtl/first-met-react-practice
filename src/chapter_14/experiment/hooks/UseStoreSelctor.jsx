import { useEffect, useState } from "react";

/**
 *
 * @param {*} store
 * @param {*} selector 바라 볼 객체의 범위를 한정짓는 함수
 * @returns
 */
export const UseStoreSelector = (store, selector) => {
  const [state, setState] = useState(() => selector(store.get()));

  // store, selector 함수가 바뀔 때 실행해줘야 한다.
  // 나머지 state 의 변경은 subscribe를 통해서 등록한 함수가 실행되도록 한다.
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const value = selector(store.get());
      setState(value);
    });

    return unsubscribe;
  }, [store, selector]);

  return state;
};
