export function getData() {
  return {
    type: 'IMAGES_FETCH_REQUESTED',
  }
}

export function getImages(images) {
  return {
    type: 'IMAGES_FETCH_SUCCEEDED',
    images,
  };
}
