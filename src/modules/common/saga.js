import { take, put } from 'redux-saga/effects';

import { actions, TEST } from './actions';

export function* testSaga() {
  while (true) {
    try {
      const { payload } = yield take(TEST.REQUEST);
      yield put(actions.test.success(payload))
    } catch (error) {
      yield put(actions.test.failure(error));
    }
  }
}
