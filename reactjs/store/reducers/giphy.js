import {API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE, INCREMENT} from '../actions/giphy';

const defaultState = {
  images: [],
  isFetching: false,
  error: false
}

export default function images(state = {defaultState}, action) {
  switch(action.type) {
    case API_CALL_REQUEST:
      return {...state, error: false, isFetching: true};
    case API_CALL_SUCCESS:
      return {...state, error: false, images: action.images, isFetching: false} ;
    case API_CALL_FAILURE:
      return {...state, error: true, isFetching: false};
    default:
      return state;
  }
}
