import * as actions from './actions';

const initialState = {
  testState: 'yoyoyo',
  [actions.TEST]: {loading: false, error: null}
}

function commonReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.TEST.REQUEST:
      return {
        ...state,
        [actions.TEST]: {loading: true}
      };

    case actions.TEST.SUCCESS:
      return {
        ...state,
        testState: 'it worked',
        [actions.TEST]: {loading: false}
      };

    case actions.TEST.FAILURE:
      return {
        ...state,
        [actions.TEST]: {loading: false, error: actions.action.payload}        
      };

    default:
      return state;
  }
}

export default commonReducer;