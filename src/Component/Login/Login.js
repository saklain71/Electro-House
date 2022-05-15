import React from 'react';
//import { useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Login = () => {
    // const navigate = useNavigate();

    const loginHandle = (event) => {

    }

    const RegisterHandle = () => {
        //navigate('/login');
    }

    return (
        <div>
            <h1 className='mb-5 text-primary'>Login Form</h1>
            <form className='w-50 mx-auto mb-5' onSubmit={loginHandle}>
                <div className="mb-3">
                    <label className="form-label fs-4 ">Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label fs-4" >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className='d-flex justify-content-center'>
                <p className='px-2'>
                    register here
                    <button className='btn btn-primary ms-2' onClick={RegisterHandle}>Register</button>
                </p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;