import NavBar from '@/components/NavBar';
import type { FC } from 'react';
import type { IRouteComponentProps } from 'umi';
import styles from './index.less';

const Index: FC<IRouteComponentProps> = (props) => {
  return (
    <>
      <NavBar routes={props.route.routes || []}></NavBar>

      <div className={styles.view}>{props.children}</div>
    </>
  );
};

export default Index;
