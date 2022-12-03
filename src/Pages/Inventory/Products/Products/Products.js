import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const { data: products } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })
    const handleDelete = () => {

    }

    return (
        <div>
            <h3 className='text-3xl text-center mb-5'>All Products</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, idx) => <tr key={idx}>
                                <th><div className="avatar">
                                    <div className="w-12 rounded">
                                        <img src={product.image} alt='' />
                                    </div>
                                </div></th>
                                <td>{product.name}</td>
                                <td className='font-bold text-primary'>${product.price}</td>
                                <td>
                                    <Link><button className='btn btn-accent btn-outline btn-sm'>Update</button></Link>
                                </td>
                                <td><button onClick={() => handleDelete(product)} className='btn btn-sm btn-outline btn-error'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;