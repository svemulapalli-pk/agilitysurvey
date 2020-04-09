import { combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router';
import { assessmentStepsReducer } from './assessmentStepsReducer';

const history = require("history").createBrowserHistory();
const rootReducer = combineReducers({
  assessmentStepsReducer,
  router: connectRouter(history)
});

export default rootReducer;
