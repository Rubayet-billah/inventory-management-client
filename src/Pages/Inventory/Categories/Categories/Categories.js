import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import ProductsInCategory from './ProductsInCategory';

const Categories = () => {
    const { data: categories, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://inventory-management-server-sigma.vercel.app/categories');
            const data = await res.json();
            return data
        }
    })

    const handleDelete = (category) => {
        const confirmation = window.confirm(`Are you sure ti delete ${category.name} category`);
        if (confirmation) {
            fetch(`https://inventory-management-server-sigma.vercel.app/categories/${category._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Category deleted successfully')
                        refetch()
                    }
                })
        }
    }
    return (
        <div>
            <h3 className='text-3xl text-center mb-5'>All Categories</h3>

            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Total Products</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories?.map((category, idx) => <tr key={idx}>
                                <td>{category.name}</td>
                                <td className='font-bold'><ProductsInCategory category={category} /></td>
                                <td>
                                    <Link to={`/updatecategory/${category._id}`}><button className='btn btn-accent btn-outline btn-sm'>Update</button></Link>
                                </td>
                                <td><button onClick={() => handleDelete(category)} className='btn btn-sm btn-outline btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Categories;