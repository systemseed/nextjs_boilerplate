import * as types from './Types';

export const gifsRequest = () => {
    return {
        type: types.GIFS_REQ,
        payload: ''
    }
}

export const gifsResponse = (data) => {
    return {
        type: types.GIFS_RES,
        payload: data
    }
}

export const gifsError = (data) => {
    return {
        type: types.GIFS_ERROR,
        payload: data
    }
}

export const gotoNextPage = (pageNum) => {
    return {
        type: types.GO_NEXT_PAGE,
        payload: pageNum
    }
}