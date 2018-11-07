import * as types from '../actions/Types';

const init = {
    response: null,
    error: null,
    pageNum: null
}

const gifReducer = (state = init, action) => {
    switch (action.type) {
        case types.GIFS_REQ:
            state = { ...state, response: null, error: null, pageNum: null }
            break;
        case types.GIFS_RES:
            state = { ...state, response: action.payload, error: null, pageNum: null }
            break;
        case types.GIFS_ERROR:
            state = { ...state, response: null, error: action.payload, pageNum: null }
            break;
        case types.GO_NEXT_PAGE:
            state = { ...state, response: null, error: null, pageNum: action.payload }
            break;
        default:
            break;
    }
    return state;
}

export default gifReducer;