import React from 'react';

const ImageCard = props => (
  <div className="card image-card">
    <div className="card-img-top">
      <div className="img-square">
        <img src={ props.url } alt={ props.title } />
      </div>
    </div>
    <div className="card-body">
      <h5 className="card-title">{ props.title }</h5>
    </div>
  </div>
);

export default ImageCard;
