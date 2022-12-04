import React from 'react';
import ProductCard from './ProductCard';

const ProductCards = ({ products }) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
            {
                products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default ProductCards;