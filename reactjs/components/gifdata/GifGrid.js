import React from 'react'

const GifGrid = ({ slicedItems }) => {
    return (
        <div className="row">
            {
                slicedItems.map(item => (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
                    <div className="card mb-4" key={item.id}>
                        <img className="card-img-top" src={item.images.original.url} alt={item.title} style={{height: "275px"}} />
                        <div className="card-body">
                            <h5 className="card-title text-center text-capitalize">{item.title}</h5>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    )
}
export default GifGrid;