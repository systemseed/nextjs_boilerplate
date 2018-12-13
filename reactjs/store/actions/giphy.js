export const API_CALL_REQUEST = "API_CALL_REQUEST";
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_FAILURE = "API_CALL_FAILURE";

export function requestImages() {
  return {
    type: API_CALL_REQUEST
  };
}

export function loadImages(images) {
  return {
    type: API_CALL_SUCCESS,
    images
  };
}

export function fetchImagesFail(error) {
  return {
    type: API_CALL_FAILURE,
    error
  };
}
