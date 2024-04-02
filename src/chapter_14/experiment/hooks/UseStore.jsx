import { useEffect, useState } from "react";

// Store 를 사용할 수 있는 커스텀 훅
// 단점 : 객체의 경우에 필요한 것을 선택적으로 렌더링할 수 없다.
export const UseStore = (store) => {
  const [state, setState] = useState(() => store.get());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.get());
    });

    return unsubscribe;
  }, [store]);

  return [state, store.set];
};
