import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ProductsInCategory = ({ category }) => {
    const { data: products } = useQuery({
        queryKey: ['products', category._id],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/${category._id}`);
            const data = await res.json();
            return data
        }
    })
    console.log(products)
    return (
        <div>
            {products?.length}
        </div>
    );
};

export default ProductsInCategory;