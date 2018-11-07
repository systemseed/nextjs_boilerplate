import React from 'react'

const PaginationItem = ({ page, onClick }) => {
    return (
        <div onClick={onClick} className="Pagination_Item">
            {page + 1}
        </div>
    )
}
export default PaginationItem;