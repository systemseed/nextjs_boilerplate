import React from 'react';
import { connect } from 'react-redux';
import ImageGrid from '../components/ImageGrid';

class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      itemsOnPage: 12,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({type: 'IMAGES_FETCH_REQUESTED'});

    this.timerID = setInterval(() => {
      this.props.dispatch({type: 'IMAGES_FETCH_REQUESTED'});
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  handleClick(event) {
    const { currentPage, itemsOnPage } = this.state;
    let itemsCount = this.props.images.length;
    let pages = Math.ceil(itemsCount / itemsOnPage);

    event.preventDefault();

    if (event.target.id == 'next') {
      if ((currentPage + 1) <= pages ) {
        this.setState({
          currentPage: currentPage + 1,
        });
      }

    } else if (event.target.id == 'prev') {
      if ((currentPage - 1) >= 1 ) {
        this.setState({
          currentPage: currentPage - 1,
        });
      }
    }
  }

  render() {
    const { currentPage, itemsOnPage, itemsLoaded } = this.state;
    let itemsCount = this.props.images.length;
    let pages = Math.ceil(itemsCount / itemsOnPage);
    let items = this.props.images;
    const lastItem = currentPage * itemsOnPage;
    const firstItem = lastItem - itemsOnPage;
    const currentItems = items.slice(firstItem, lastItem);

    return (
      <div className="page">
        <div className="page-content">
          {!this.props.imagesLoaded ? (
            <div className="d-flex">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <ImageGrid images={currentItems} />
          )}
        </div>
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item"><a className="page-link" href="#" id="prev" onClick={this.handleClick}>Previous</a></li>
            <li className="page-item disabled"><span className="page-link">Page {currentPage} of {pages}</span></li>
            <li className="page-item"><a className="page-link" href="#" id="next" onClick={this.handleClick}>Next</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => state.giphy;

export default connect(mapStateToProps)(Page);
