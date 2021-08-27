const getUserInfo = (username) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username,
      });
    }, 500);
  });
};

export default {
  namespace: 'userInfo',
  state: {
    requesting: true,
  },

  reducers: {
    setUserInfo(state, { payload }) {
      return {
        ...state,
        ...payload,
        requesting: false,
      };
    },
  },
  effects: {
    *getUserInfo(action, { call, put }) {
      const res = yield call(getUserInfo, action.payload);
      yield put({ type: 'setUserInfo', payload: res });
    },
  },
};
