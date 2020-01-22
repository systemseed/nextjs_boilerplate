import { combineReducers } from 'redux';
// Put all your reducers here.
import example from './example';
import giphy from './giphy';

export default combineReducers({
  example,
  giphy,
});
