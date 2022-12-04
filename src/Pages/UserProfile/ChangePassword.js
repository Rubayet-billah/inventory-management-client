import React from 'react';
import { useForm } from 'react-hook-form';

const ChangePassword = () => {
    const { register, handleSubmit } = useForm()

    const handleUpdatePassword = (data) => {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleUpdatePassword)} className="card w-96 bg-base-100 shadow-xl">
                <div className='card-body'>
                    <h2 className='text-2xl text-center'>Change Password</h2>
                    <label className='text-sm'>New Password</label>
                    <input type="password" {...register('NewPassword')} placeholder="Password" className="input input-bordered input-sm w-full mb-2" />
                    <label className='text-sm'>Confirm Password</label>
                    <input type="password" {...register('confirmPassword')} placeholder="Password" className="input input-bordered input-sm w-full mb-2" />
                    <div className="card-actions justify-end">
                        <input type="submit" value='Change' className="btn btn-accent btn-sm" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;