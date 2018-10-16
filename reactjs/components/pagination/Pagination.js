import React, { Component } from 'react';
import PaginationItem from './PaginationItem';

class Pagination extends Component {

    constructor(props) {
        super(props);
        const { totalItems, numItemsToDisplay } = this.props;
        this.totalItems = typeof totalItems === "number" ? totalItems : 0;
        this.numItemsToDisplay = typeof numItemsToDisplay === "number" ? numItemsToDisplay : 0;
    }

    getPages(totalPage) {
        let pages = [];
        let i = 0;

        while (i < totalPage) {
            pages.push(i);
            i++;
        }

        return pages;
    }

    handleClick = (page, e) => {
        e.preventDefault();
        this.props.gotoNextPage(page);
    }

    render() {
        let pages = this.getPages(Math.ceil(this.totalItems / this.numItemsToDisplay));
        return (
            <div className="Pagination">
                {
                    pages.map((page, index) =>
                        <PaginationItem key={index} page={page} onClick={e => this.handleClick(page, e)} />
                    )
                }
            </div>
        )
    }
}
export default Pagination;