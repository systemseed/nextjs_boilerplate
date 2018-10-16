import { call, takeLatest, put } from 'redux-saga/effects';
import * as types from '../actions/Types';
import api from '../api/Api';
import { gifsResponse, gifsError } from '../actions/Gifs';

export function* gifSagaWatcher() {
    yield takeLatest(types.GIFS_REQ, goReqGif);
}

function* goReqGif() {
    try {
        let res = yield call(api.gif.gifs);
        yield put(gifsResponse(res.data.data));
    } catch (e) {
        yield put(gifsError(e.response));
    }
}
