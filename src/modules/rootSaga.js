import { fork, all } from 'redux-saga/effects';

import {
  testSaga
} from './common/saga';

export default function* rootSaga() {
  yield all([
    fork(testSaga),
  ])
}