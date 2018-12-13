import React from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Gallery from '../components/Gallery';

class PageTwo extends React.Component {

  componentDidMount() {
    this.props.dispatch({type: 'API_CALL_REQUEST'});
    this.interval = setInterval(() => {
      this.props.dispatch({type: 'API_CALL_REQUEST'});
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const giphys = this.props.imageData;
    return (
      <div>
        <div className="jumbotron">
          <div className="row justify-content-center mb-3">
            <h1>Alex Mireles</h1>
          </div>
          <div className="row justify-content-center">
            <button  type="button" className="btn btn-dark">
              <Link href="/index"><a style={{color:"#fff"}}>Prev</a></Link>
            </button>
          </div>
        </div>
        <div className="container">
          <Gallery giphyData={giphys}/>
        </div>
      </div>
    );
  }
}

PageTwo.propTypes = {
  imageData: PropTypes.array
}

function mapStateToProps(state) {
  return {
    imageData: state.giphy.images.data,
  }
}

export default connect(mapStateToProps)(PageTwo);
