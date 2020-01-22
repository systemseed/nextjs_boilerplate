import { put, takeEvery } from 'redux-saga/effects'

function* fetchImages(action) {
   try {
      const query = 'https://api.giphy.com/v1/gifs/random?api_key=uR2U521Jt2OmOdC0ErnkoqFXc03AxACN&tag=&rating=G';
      const imagesNumber = 24;
      let images = [];

      for (var i = 0; i < imagesNumber; i++) {
        var image = yield fetch(query).then(function(data) {
          var json = data.json();
          return json;
        });

        images.push(image.data);
      }

      yield put({type: "IMAGES_FETCH_SUCCEEDED", images});
   } catch (e) {
      yield put({type: "IMAGES_FETCH_FAILED", message: e.message});
   }
}

function* giphySagas() {
  yield takeEvery("IMAGES_FETCH_REQUESTED", fetchImages);
}

export default giphySagas;
