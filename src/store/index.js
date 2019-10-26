import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from './middleware/logger';
import rootReducer from '../modules/rootReducer';
import rootSaga from '../modules/rootSaga';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const history = createBrowserHistory();
  const store = createStore(
    rootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger, routerMiddleware(history)))
  );
  sagaMiddleware.run(rootSaga);
  store.history = history;
  return store;
}