import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const UserProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const handleUpdateProfile = (data) => {

    }
    return (
        <div className='md:h-[700px] flex justify-center items-center'>
            <form onSubmit={handleSubmit(handleUpdateProfile)} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-center">Update Profile</h2>
                    <label htmlFor="">Email</label>
                    <input type="email" {...register('email')} placeholder="Email" className="input input-bordered w-full mb-2" defaultValue={user?.email} disabled />
                    <label htmlFor="">New Name</label>
                    <input type="text" {...register('name')} placeholder="Name" className="input input-bordered w-full mb-2" defaultValue={user?.displayName} />
                    <label htmlFor="">New Photo</label>
                    <input type="file" {...register('photo')} placeholder="Photo" className="file-input file-input-bordered w-full mb-2" defaultValue={user?.photoURL} />
                    <label htmlFor="">New Password</label>
                    <input type="password" {...register('password')} placeholder="Password" className="input input-bordered w-full mb-2" />
                    <div className="card-actions justify-end">
                        <input type="submit" value='Update' className="btn btn-accent w-full" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserProfile;