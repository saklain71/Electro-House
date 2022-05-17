import React from 'react';
import google from '../../Images/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    //const location = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(
        auth
        );
    const navigate = useNavigate();

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate('/');
    }

    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='bg bg-light w-50 mx-auto p-2 m-2 border rounded-pill d-flex justify-content-center'>
                <img style={{ width: "30px" }} src={`${google}`} alt="" />
                <span className="px-2 text-primary">Sing in with Google</span>
            </button>
        </div>

    );
};

export default SocialLogin;
