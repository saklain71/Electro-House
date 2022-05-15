import React from 'react';
import google from '../../Images/google.png';
const SocialLogin = () => {
    return (
        <div className='bg bg-light w-50 mx-auto p-2 m-2 border rounded-pill d-flex justify-content-center'>
            <img style={{width:"30px"}} src={`${google}`} alt="" />
            <span className="px-2 text-primary">Sing in with Google</span>
        </div>
    );
};

export default SocialLogin;