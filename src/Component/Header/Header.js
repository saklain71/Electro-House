import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const signOutHandler = () => {
        signOut(auth);
        navigate('/login');
    }

    return (
        <div>
            <nav className='navbar mx-2 bg bg-light'>
                <div className='fs-5'>
                    <Link className='text-decoration-none text-dark fw-bold' to={"/"}>
                        Electro-House
                    </Link>
                </div>
                <div>
                    <Link className='text-decoration-none text-dark' to="/">
                        Home
                    </Link>
                    <Link className='text-decoration-none ms-4 text-dark' to="/inventory">
                        Manage Inventory
                    </Link>
                    <Link className='text-decoration-none ms-4 text-dark' to="/blog">
                        Blog
                    </Link>
                    {
                        user && <>
                            <Link className='text-decoration-none ms-4 text-dark' to="/additem">
                                Add Items
                            </Link>
                             <Link className='text-decoration-none ms-4 text-dark' to="/myitem">
                             My Items
                         </Link>
                            </>
                           
                    }
                    {
                        user ?
                            <button className='bt btn-primary rounded text-dark ms-2' onClick={signOutHandler}>
                                signout
                            </button> :
                            <Link className='text-decoration-none ms-5' to="/login">
                                <button className='bt btn-primary rounded text-dark'>
                                    Login
                                </button>
                            </Link>
                    }

                    {
                        (!user) ? <Link className='text-decoration-none ms-2 text-dark' to="/register">
                            <button className='bt btn-primary rounded text-dark'>
                                Register
                            </button>
                        </Link> : ''
                    }
                </div>
            </nav>

        </div>
    );
};

export default Header;