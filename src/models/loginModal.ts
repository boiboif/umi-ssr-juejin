import type { ImmerReducer } from 'umi';

export interface loginModalState {
  visible: boolean;
}

export interface loginModalType {
  namespace: 'loginModal';
  state: loginModalState;

  reducers: {
    // setVisible: Reducer<loginModalState>;
    // 启用 immer 之后
    setVisible: ImmerReducer<loginModalState>;
  };
}

const loginModalModel: loginModalType = {
  namespace: 'loginModal',
  state: {
    visible: false,
  },

  reducers: {
    setVisible(state, { payload }) {
      // eslint-disable-next-line no-param-reassign
      state.visible = payload;
    },
  },
};

export default loginModalModel;
