import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ChangePassword = () => {
    const { updateUserPassword } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm()

    const handleUpdatePassword = (data) => {
        const { newPassword, confirmPassword } = data;
        if (newPassword !== confirmPassword) {
            toast.error('Please retype password carefully')
            reset()
        } else {
            updateUserPassword(newPassword)
                .then(() => toast.success('Password changed successfully'))
                .catch(err => console.error(err))
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleUpdatePassword)} className="">
                <h2 className='text-2xl text-center'>Change Password</h2>
                <label className='text-sm'>New Password</label>
                <input type="password" {...register('newPassword')} placeholder="Password" className="input input-bordered input-sm w-full mb-2" required />
                <label className='text-sm'>Confirm Password</label>
                <input type="password" {...register('confirmPassword')} placeholder="Password" className="input input-bordered input-sm w-full mb-2" required />
                <div className="card-actions justify-end">
                    <input type="submit" value='Change' className="btn btn-accent btn-sm" />
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;