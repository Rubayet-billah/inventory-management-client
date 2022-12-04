import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ChangePhoto = () => {
    const { user, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_apikey;

    const handlePhoto = (data) => {
        const image = data.photo[0]
        const formData = new FormData();
        formData.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(data => {
                updateUserProfile(user?.displayName, data.data.url)
                    .then(() => toast.success('Photo updated successfully'))
                    .catch(err => console.error(err))
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handlePhoto)} className="">
                <h2 className='text-2xl text-center'>Change Photo</h2>
                <label className='text-sm'>New Photo</label>
                <input type="file" {...register('photo')} placeholder="Password" className="file-input file-input-bordered file-input-sm w-full mb-2" required />
                <div className="card-actions justify-end">
                    <input type="submit" value='Change' className="btn btn-accent btn-sm" />
                </div>
            </form>
        </div>
    );
};

export default ChangePhoto;