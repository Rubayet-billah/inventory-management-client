import React from 'react';
import ChangeName from './ChangeName';
import ChangePassword from './ChangePassword';
import ChangePhoto from './ChangePhoto';

const UserProfile = () => {


    return (
        <div className='md:min-h-[700px] md:flex justify-center items-center'>
            <section>
                <ChangeName></ChangeName>
                <ChangePhoto></ChangePhoto>
                <ChangePassword></ChangePassword>
            </section>
        </div>
    );
};

export default UserProfile;