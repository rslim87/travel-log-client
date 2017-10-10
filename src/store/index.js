
import {
  createStore, 
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import logs from '../reducers/logsReducer';


const reducers = combineReducers({
	logs: logs

});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);