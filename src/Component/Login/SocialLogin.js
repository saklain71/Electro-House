import React from 'react';
import google from '../../Images/google.png';
const SocialLogin = () => {
    return (
        <div className='btn btn-light w-50 mx-auto d-block m-2 d-flex justify-content-center'>
            <img style={{width:"30px"}} src={`${google}`} alt="" />
            <span className="px-2 text-primary">Sing in with Google</span>
        </div>
    );
};

export default SocialLogin;