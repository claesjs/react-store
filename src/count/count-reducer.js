import * as Const from './count-constants';

export const countReducer = (state, action) => {
  switch (action.type) {
    case Const.INCREMENT:
      return { count: state.count + 1 };
    case Const.REDUCE:
      return { count: state.count - 1 };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};
