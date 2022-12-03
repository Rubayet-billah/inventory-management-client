import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddCategories = () => {
    const { register, handleSubmit } = useForm();

    const handleAddCategory = (data) => {
        const { name, categoryId, description } = data;
        const categoryObj = { name, categoryId, description }

        fetch('http://localhost:5000/categories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(categoryObj)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Category added successfully')
                }
                else {
                    toast.error(data.message)
                }
            })
    }
    return (
        <div>
            <h2 className='text-3xl text-center my-5'>Add Category Here</h2>
            <form onSubmit={handleSubmit(handleAddCategory)} className='max-w-lg mx-auto bg-gray-50 md:p-12 rounded-lg'>
                <label className='text-sm'>Category Name</label>
                <input className='input input-sm input-bordered w-full mb-4 mt-2' {...register("name", { required: true })} placeholder='Category Name' />

                <label className='text-sm'>Category Description</label>
                <textarea className="textarea textarea-bordered w-full  mb-4 mt-2" {...register("description")} placeholder="Description"></textarea>

                <input className='bg-accent hover:bg-accent-focus ease-in-out duration-200 w-full mb-4 mt-2 text-white font-semibold px-8 py-1 rounded' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddCategories;