import { all } from 'redux-saga/effects';
// Put all your sagas here.
import exampleSagas from './example';
import giphySaga from './giphy';

export default function* rootSaga() {
  yield all([
    ...exampleSagas(),
    ...giphySaga(),
  ]);
}
