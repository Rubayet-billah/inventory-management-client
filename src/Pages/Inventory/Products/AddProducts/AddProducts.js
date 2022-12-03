import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const imgHostKey = process.env.REACT_APP_imgbb_apikey;
    const navigate = useNavigate();
    const handleAddCar = (data) => {
        const { name, category, price } = data;
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
                    name, image: data.data.url, category, price
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
                            navigate('/')
                        }
                    })

            })
    }

    return (
        <div>
            <h2 className='text-3xl text-center my-5'>Add Product Here</h2>
            <form onSubmit={handleSubmit(handleAddCar)} className='max-w-lg mx-auto bg-gray-50 md:p-12 rounded-lg'>
                <input className='input input-sm input-bordered w-full my-2' {...register("name", { required: true })} placeholder='Product Name' />
                {errors.name && <p className='text-red-500'>This field is required</p>}
                <input className='file-input file-input-sm file-input-bordered w-full my-2' {...register("image", { required: true })} placeholder='Image' type='file' />

                <select className="select select-sm select-bordered w-full my-2" {...register("category", { required: true })}>
                    <option>Mens T shirt</option>
                    <option>Mens Sneakers</option>
                </select>

                <input className='input input-sm input-bordered w-full my-2' {...register("price", { required: true })} placeholder='Price USD' type='number' />
                {errors.price && <p className='text-red-500'>This field is required</p>}

                <input className='bg-accent hover:bg-accent-focus ease-in-out duration-200 w-full my-3 text-white font-semibold px-8 py-1 rounded' type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;