import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext)

    const handleLogout = () => {
        logoutUser()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const menu = <>
        <li><Link to='/'>Home</Link></li>
        {
            user?.uid ? <>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/categories'>Categories</Link></li>
                <li><Link to='/addproducts'>Add Products</Link></li>
                <li><Link to='/addcategories'>Add Categories</Link></li>

            </> : <>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
            </>
        }
    </>

    return (
        <div>
            <div className="navbar bg-base-200 md:px-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Gallery</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ? <button onClick={handleLogout} className='btn btn-sm btn-accent btn-outline'>Logout</button> : <></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;