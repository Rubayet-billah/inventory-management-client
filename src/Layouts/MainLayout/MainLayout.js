import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const MainLayout = () => {
    return (
        <div className='container min-h-screen mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster
                position="top-center"
            />
        </div>
    );
};

export default MainLayout;