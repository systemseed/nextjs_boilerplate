import { all, fork } from 'redux-saga/effects';
// Put all your sagas here.
import { gifSagaWatcher } from './GifSaga';

export default function* rootSaga() {
  yield all([
      fork(gifSagaWatcher)
  ])
}