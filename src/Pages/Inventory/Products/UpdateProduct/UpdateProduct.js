import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const product = useLoaderData();
    const { register, handleSubmit } = useForm()
    const { _id, name, price, category, description } = product;

    const handleUpdate = (data) => {
        const { newName, newPrice, newDescription } = data;

        const updatedProduct = {
            name: newName,
            price: newPrice,
            description: newDescription
        }
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <h2 className='text-3xl text-center my-5'>Update Product Here</h2>
            <form onSubmit={handleSubmit(handleUpdate)} className='max-w-lg mx-auto bg-gray-50 md:p-12 rounded-lg'>
                <label className='text-sm'>Name</label>
                <input className='input input-sm input-bordered w-full mb-4 mt-2' {...register("newName")} placeholder='Product Name' defaultValue={name} />

                <label className='text-sm'>Category</label>
                <select className="select select-sm select-bordered w-full mb-4 mt-2" disabled {...register("category")}>
                    <option>{category}</option>
                </select>

                <label className='text-sm'>Price</label>
                <input className='input input-sm input-bordered w-full mb-4 mt-2' {...register("newPrice")} placeholder='Price USD' type='number' defaultValue={price} />

                <label className='text-sm'>Description</label>
                <textarea className="textarea textarea-bordered w-full" {...register("newDescription")} placeholder="Description" defaultValue={description}></textarea>

                <input className='bg-accent hover:bg-accent-focus ease-in-out duration-200 w-full my-3 text-white font-semibold px-8 py-1 rounded' type="submit" value='Update' />
            </form>
        </div>
    );
};

export default UpdateProduct;