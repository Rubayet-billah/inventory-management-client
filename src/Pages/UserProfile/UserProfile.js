import React from 'react';
import ChangeName from './ChangeName';
import ChangePassword from './ChangePassword';
import ChangePhoto from './ChangePhoto';

const UserProfile = () => {


    return (
        <div className='md:min-h-[700px] flex justify-center items-center'>
            <section className='w-96 md:w-3/5 lg:w-1/2 bg-base-100 px-2 md:px-6 py-5 shadow-xl rounded-lg'>
                <ChangeName></ChangeName>
                <ChangePhoto></ChangePhoto>
                <ChangePassword></ChangePassword>
            </section>
        </div>
    );
};

export default UserProfile;