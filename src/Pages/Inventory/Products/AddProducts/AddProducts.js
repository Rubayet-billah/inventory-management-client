import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const AddProducts = () => {
    const categories = useLoaderData()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const imgHostKey = process.env.REACT_APP_imgbb_apikey;
    const navigate = useNavigate();
    const handleAddProduct = (data) => {
        const { name, categoryId, price, description } = data;
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(data => {
                const productObj = {
                    date: format(new Date(), 'PP'),
                    name, image: data.data.url, categoryId, price, description
                }
                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(productObj)
                }).then(res => res.json())
                    .then(result => {
                        if (result.acknowledged) {
                            toast.success('Product added successfully')
                            navigate('/products')
                        }
                    })

            })
    }

    return (
        <div>
            <h2 className='text-3xl text-center my-5'>Add Product Here</h2>
            <form onSubmit={handleSubmit(handleAddProduct)} className='max-w-lg mx-auto bg-gray-50 md:p-12 rounded-lg'>
                <label className='text-sm'>Product Name</label>
                <input className='input input-sm input-bordered w-full mb-4 mt-2' {...register("name", { required: true })} placeholder='Product Name' />
                {errors.name && <p className='text-red-500'>This field is required</p>}
                <label className='text-sm'>Product Image</label>
                <input className='file-input file-input-sm file-input-bordered w-full mb-4 mt-2' {...register("image", { required: true })} placeholder='Image' type='file' />

                <label className='text-sm'>Product Category</label>
                <select className="select select-sm select-bordered w-full mb-4 mt-2" {...register("categoryId", { required: true })}>
                    {
                        categories.map(category => <option key={category._id} value={category._id}>{category.name}</option>)
                    }
                </select>

                <label className='text-sm'>Product Price</label>
                <input className='input input-sm input-bordered w-full mb-4 mt-2' {...register("price", { required: true })} placeholder='Price USD' type='number' />
                {errors.price && <p className='text-red-500'>This field is required</p>}
                <label className='text-sm'>Product description</label>
                <textarea className="textarea textarea-bordered w-full  mb-4 mt-2" {...register("description")} placeholder="Description"></textarea>

                <input className='bg-accent hover:bg-accent-focus ease-in-out duration-200 w-full mb-4 mt-2 text-white font-semibold px-8 py-1 rounded' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProducts;