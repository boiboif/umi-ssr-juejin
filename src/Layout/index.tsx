import LoginModal from '@/components/LoginModal';
import { useEffect } from 'react';
import type { IRouteComponentProps } from 'umi';
import { useDispatch } from 'umi';
import Header from '@/components/Header';
import styles from './index.less';

const Index = (props: IRouteComponentProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'userInfo/getUserInfo',
      payload: localStorage.getItem('username'),
    });
  }, [dispatch]);
  return (
    <div className="container">
      <LoginModal></LoginModal>
      <div className={styles.headerWrap}>
        <Header routes={props.route.routes || []}></Header>
      </div>

      <div>{props.children}</div>

      <footer>脚部</footer>
    </div>
  );
};

// Index.getInitialProps = (async (ctx) => {
//   const { store } = ctx;
//   const { userInfo } = store.getState();

//   if (userInfo) return userInfo;
//   await store.dispatch({ type: 'userInfo/getUserInfo' });
// }) as IGetInitialProps;

export default Index;
