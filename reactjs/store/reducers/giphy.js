const initialState = {
  images: [],
  imagesLoaded: false,
};

function giphyReducer(state = initialState, action) {
  if (action.type === "IMAGES_FETCH_SUCCEEDED") {
    return Object.assign({}, state, {
      images: action.images,
      imagesLoaded: true,
    });
  }

  return state;
}

export default giphyReducer;
