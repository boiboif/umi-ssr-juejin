import { useCallback } from 'react';
import { history, useDispatch, useSelector } from 'umi';

const useAuthPush = () => {
  const userInfo = useSelector<any, any>((state) => state.userInfo);
  const dispatch = useDispatch();

  function authPush(arg: string): void;
  function authPush(...arg: Parameters<typeof history.push>): void;
  function authPush(arg: any) {
    if (!userInfo.username) {
      if (!userInfo.requesting) {
        dispatch({ type: 'loginModal/setVisible', payload: true });
      }
      return;
    }
    history.push(arg);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(authPush, [userInfo]);
};

export default useAuthPush;
