import React from 'react';
import GifGrid from './GifGrid';
import Pagination from '../pagination/Pagination';

const GifData = ({ slicedItems, totalItems, numItemsToDisplay, gotoNextPage }) => {
    return (
        <React.Fragment>
            <GifGrid slicedItems={slicedItems} />
            {
                numItemsToDisplay < totalItems &&
                <Pagination totalItems={totalItems} numItemsToDisplay={numItemsToDisplay} gotoNextPage={gotoNextPage} />
            }
        </React.Fragment>
    )
}
export default GifData;