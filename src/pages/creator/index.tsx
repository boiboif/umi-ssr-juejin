import type { IGetInitialProps } from 'umi';

interface Iprops {
  data: string;
}

const Creator = (props: Iprops) => {
  return <div>Creator:{props.data}</div>;
};

export default Creator;

Creator.getInitialProps = (async () => {}) as IGetInitialProps;
