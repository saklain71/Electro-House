import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='navbar '>
                <div className='fs-5'>
                    <Link className='text-decoration-none text-dark' to={"/"}> Electro-House</Link>
                </div>
                <div>
                    <Link className='text-decoration-none text-dark' to="/">Home</Link>
                    <Link className='text-decoration-none ms-4 text-dark' to="/inventory">Manage Inventory</Link>
                    <Link className='text-decoration-none ms-4 text-dark' to="/blog">Blog</Link>
                    <Link className='text-decoration-none ms-5' to="/login"><button className='bt btn-primary rounded text-dark'>Login</button></Link>
                    <Link className='text-decoration-none ms-2 text-dark' to="/register"> <button className='bt btn-primary rounded text-dark'>Register</button></Link>
                </div>
            </nav>

        </div>
    );
};

export default Header;