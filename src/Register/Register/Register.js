import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();

    const handleRegister = (data) => {
        const { name, email, password } = data
        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
            }).catch(err => console.error(err))
    }
    return (
        <section className='md:h-[700px] flex justify-center items-center'>
            <form onSubmit={handleSubmit(handleRegister)} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-center">Register</h2>
                    <label htmlFor="">Name</label>
                    <input type="text" {...register('name')} placeholder="Name" className="input input-bordered w-full mb-2" />
                    <label htmlFor="">Email</label>
                    <input type="email" {...register('email')} placeholder="Email" className="input input-bordered w-full mb-2" />
                    <label htmlFor="">Password</label>
                    <input type="password" {...register('password')} placeholder="Password" className="input input-bordered w-full mb-2" />
                    <div className="card-actions justify-end">
                        <input type="submit" value='Register' className="btn btn-accent w-full" />
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Register;