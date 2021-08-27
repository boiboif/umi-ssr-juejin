import { Redirect, useSelector, useDispatch } from 'umi';
import { useEffect } from 'react';

const AuthWrapper = (props: any) => {
  const dispatch = useDispatch();
  const state = useSelector<any, any>((state) => state);

  useEffect(() => {
    if (!state.userInfo.requesting && !state.userInfo.username) {
      dispatch({ type: 'loginModal/setVisible', payload: true });
    }
  }, [state]);

  if (state.userInfo.requesting) {
    return props.children;
  }

  if (state.userInfo.username) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/" />;
  }
};

export default AuthWrapper;
