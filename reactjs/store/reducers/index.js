import { combineReducers } from 'redux';
// Put all your reducers here.
import gifReducer from './GifReducer';

export default combineReducers({
  gifs: gifReducer
});