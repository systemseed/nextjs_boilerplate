import React from 'react';
import ImageCard from '../ImageCard';

const ImageGrid = props => (
  <div className="container image-grid">
    <div className="row">
      { props.images.map((image, index) => (
        <div className="col col-12 col-md-6 col-lg-4" key={ image.id + '-' + index }>
          <ImageCard url={ image.images.downsized.url } title={ image.title } />
        </div>
      ))}
    </div>
  </div>
);

export default ImageGrid;
