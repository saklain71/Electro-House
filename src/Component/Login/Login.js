import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Login = () => {
   // const navigate = useNavigate();

    const RegisterHandle = () =>{
        //navigate('/login');
    }

    const loginHandle = (event) =>{

    }
    return (
        <div>
            <h1 className='mb-5 text-primary'>Login Form</h1>
            <form className='w-50 mx-auto mb-5' onSubmit={loginHandle}>
                <div className="mb-3">
                    <label className="form-label fs-4 ">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" name="confirmPass" className="form-control" id="exampleInputPassword2"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className='d-flex justify-content-center'>
                <p className='px-2'>register here</p>
                <button className='btn btn-primary'  onClick={RegisterHandle}>Register</button>
            </div>
            
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;