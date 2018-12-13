import { all, takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE, API_CALL_FETCHED } from '../actions/giphy';

function apiFetch() {
  let randomWord = require('random-words');
  let API_ENDPOINT = `https://api.giphy.com/v1/gifs/search?api_key=h6q9hI50TiiUqR8F5D4aGBm2Gqiny0jG&q=${randomWord()}&limit=12`;
   return axios({
     method: "get",
     url: API_ENDPOINT
   });
}

export function* fetchImages() {
  try {
      const res = yield call(apiFetch)
      //const res = yield call(() => axios.get(API_ENDPOINT))
      const images = yield res.data
      yield put({type: API_CALL_SUCCESS, images})

    } catch (e) {
      yield put({type: API_CALL_FAILURE, e})
      console.log('Error fetching giphy data')
    }
}

export default function* giphySaga() {
  yield all([
    yield takeLatest(API_CALL_REQUEST, fetchImages),
    yield call(fetchImages)
  ]);
}
