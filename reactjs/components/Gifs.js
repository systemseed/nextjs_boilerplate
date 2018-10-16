import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gifsRequest, gotoNextPage } from '../store/actions/Gifs';
import Loading from './Loading';
import Error from './Error';
import GifData from './gifdata/GifData';

class Gifs extends Component {

    state = {
        currentPage: 0,
        numItemsToDisplay: 12,
        response: null,
        slicedItems: null,
        pageNum: null,
        error: null,
        totalItems: 0
    }

    
    componentDidMount() {
        this.props.gifsRequest();
    }

    getSlicedItems = (page, displayItems, response) => {
        let start = page * displayItems;
        let end = start + displayItems;
        let slicedItems = response.slice(start, end);
        return slicedItems;
    }

    componentWillReceiveProps(nextProps) {
        const { currentPage, numItemsToDisplay, response } = this.state;
        if (nextProps.response != null) {
            let slicedItems = this.getSlicedItems(currentPage, numItemsToDisplay, nextProps.response);
            this.setState({
                response: nextProps.response,
                slicedItems: slicedItems,
                totalItems: nextProps.response.length
            })
        }
        if (nextProps.pageNum != null) {
            let slicedItems = this.getSlicedItems(nextProps.pageNum, numItemsToDisplay, response);
            this.setState({
                currentPage: nextProps.pageNum,
                slicedItems: slicedItems,
                pageNum: nextProps.pageNum
            })
        }
    }

    render() {
        const { response, gotoNextPage, pageNum, error } = this.props;
        const { slicedItems, numItemsToDisplay, totalItems, currentPage } = this.state;

        if (response == null && pageNum == null && error == null) {
            return (
                <React.Fragment>
                    <Loading />
                </React.Fragment>
            )
        } else if ((response !== null || pageNum != null) && error == null) {
            return (
                <React.Fragment>
                    <GifData slicedItems={slicedItems}
                        totalItems={totalItems}
                        numItemsToDisplay={numItemsToDisplay}
                        gotoNextPage={gotoNextPage}
                    />
                </React.Fragment>
            )
        }
        else if (response == null && pageNum == null && error != null) {
            return (
                <React.Fragment>
                    <Error />
                </React.Fragment>
            )
        } else {
            return null;
        }
    }
}
const mapStateToProps = (state) => ({
    response: state.gifs.response,
    error: state.gifs.error,
    pageNum: state.gifs.pageNum
})

const mapDispatchToProps = {
    gifsRequest, gotoNextPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Gifs);