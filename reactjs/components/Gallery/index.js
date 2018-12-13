import PropTypes from 'prop-types';

function Gallery(props) {
  const content = props.giphyData.map((img) =>
    <div key={img.id}>
      <div className="col-sm-6 col-md-4 m-2">
        <div className="card" style={ { width:"18rem", height:"18rem" } }>
          <img src={img.images.fixed_height.url} alt={img.title}/>
          <div className="card-body mt-1">
            <h6 className="card-title text-sm-center text-uppercase">{img.title}</h6>
          </div>
        </div>

      </div>
    </div>
);
return (
  <section>
    <div className="container">
      <div className="row my-5">
        <div className="row justify-content-center">{content}</div>
      </div>
    </div>
  </section>
 )
}

Gallery.propTypes = {
  content: PropTypes.array
}

export default Gallery;
