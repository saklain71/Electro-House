import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    const RegisterHandle = event => {

    }
    const loginHandle = event => {
        navigate('/login');
    }
    return (
        <div>
            <h1 className='mb-5 text-primary mt-2'>Register Form</h1>
            <form className='w-50 mx-auto mb-5' onSubmit={RegisterHandle}>
                <div className="mb-3">
                    <label className="form-label fs-4 ">Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleInputEmail1"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label form-label fs-4 ">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label form-label fs-4 ">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPass"
                        className="form-control"
                        id="exampleInputPassword2"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <div className='d-flex justify-content-center'>
                <p className='px-2'>
                    Already Registered ??
                    <button className='btn btn-primary' onClick={loginHandle}>Login</button>
                </p>

            </div>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;