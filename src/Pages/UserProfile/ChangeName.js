import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ChangeName = () => {
    const { user, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();

    const handleName = (data) => {
        updateUserProfile(data.name, user?.photoURL)
            .then(() => {
                toast.success('Name updated successfully')
            }).catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleName)} className="card w-96 bg-base-100 shadow-xl">
                <div className='card-body'>
                    <h2 className='text-2xl text-center'>Change Name</h2>
                    <label className='text-sm'>New Name</label>
                    <input type="text" {...register('name')} placeholder="New Name" className="input input-bordered input-sm w-full mb-2" />
                    <div className="card-actions justify-end">
                        <input type="submit" value='Change' className="btn btn-accent btn-sm" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ChangeName;