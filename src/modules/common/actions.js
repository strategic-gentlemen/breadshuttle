import _ from 'lodash';

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// Creates all three action type definitions
export const createRequestTypes = base => {
  const CONST = _.reduce(
    [REQUEST, SUCCESS, FAILURE],
    (action, type) => {
      action[type] = `${base}_${type}`;
      return action;
    },
    {}
  );
  CONST.toString = () => base;
  return CONST;
};

export const TEST = createRequestTypes('TEST');

export function action(type, payload = {}) {
  return { type, ...payload };
}

export const actions = {
  test: {
    request: data => action(TEST.REQUEST, { payload: data}),
    success: (data, response) => action(TEST.SUCCESS, { payload: data, response }),
    failure: (data, error) => action(TEST.FAILURE, { payload: data, error })
  }
}