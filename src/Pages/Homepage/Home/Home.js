import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCards from '../ProductCards/ProductCards';

const Home = () => {
    const products = useLoaderData()
    return (
        <div>
            <div className="hero min-h-[70vh] mt-5" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1206800961/photo/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-digital-marketing.jpg?b=1&s=612x612&w=0&k=20&c=mwZYTXRUffNG-igVygp49KPbBT4Dp0va1MxomnP3j9M=")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to <span className='text-accent'>GALLERY</span></h1>
                    </div>
                </div>
            </div>
            <ProductCards products={products} />
        </div>
    );
};

export default Home;