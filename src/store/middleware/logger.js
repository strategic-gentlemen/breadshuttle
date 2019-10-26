import { createLogger } from 'redux-logger';
import { includes } from 'lodash';

const BLACKLIST = [];

const logger = createLogger({
  collapsed: true,
  duration: true,
  predicate: (getState, action) => !includes(BLACKLIST, action.type)
});

export default logger;