import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateCategory = () => {
    const category = useLoaderData()
    const { register, handleSubmit } = useForm()

    const { _id, name, description } = category

    const handleUpdate = (data) => {
        const updatedCategory = { name: data.newName, description: data.newDescription }
        fetch(`https://inventory-management-server-sigma.vercel.app/categories/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCategory)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Category updated successfully')
                }
            })
    }

    return (
        <div>
            <h2 className='text-3xl text-center my-5'>Update Category Here</h2>
            <form onSubmit={handleSubmit(handleUpdate)} className='max-w-lg mx-auto bg-gray-50 md:p-12 rounded-lg'>
                <label className='text-sm'>Category Name</label>
                <input className='input input-sm input-bordered w-full mb-4 mt-2' {...register("newName")} placeholder='Product Name' defaultValue={name} />

                <label className='text-sm'>Description</label>
                <textarea className="textarea textarea-bordered w-full" {...register("newDescription")} placeholder="Description" defaultValue={description}></textarea>

                <input className='bg-accent hover:bg-accent-focus ease-in-out duration-200 w-full my-3 text-white font-semibold px-8 py-1 rounded' type="submit" value='Update' />
            </form>
        </div>
    );
};

export default UpdateCategory;