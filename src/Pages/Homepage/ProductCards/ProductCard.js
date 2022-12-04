import React from 'react';

const ProductCard = ({ product }) => {
    const { name, image, price, description } = product
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='grid grid-cols-2'>
                        <p className='text-xl'>Resale Price: <span className='text-primary font-bold'>${price}</span></p>
                    </div>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <label
                            className='btn btn-sm btn-primary'>Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;