import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import reduceReducers from 'reduce-reducers';

// REDUCERS
import commonReducer from './common/reducer';

const rootReducer = (history) => 
  combineReducers({
    common: commonReducer,
    router: connectRouter(history),
  });

export default rootReducer;
