import React from 'react';
import SocialLogin from './SocialLogin';

const Register = () => {

    const RegisterHandle= event =>{

    }
    const loginHandle = event =>{

    }
    return (
        <div>
            <h1 className='mb-5 text-primary'>Login Form</h1>
            <form className='w-50 mx-auto mb-5' onSubmit={RegisterHandle}>
                <div className="mb-3">
                    <label className="form-label fs-4 ">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" name="confirmPass" className="form-control" id="exampleInputPassword2" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className='d-flex justify-content-center'>
                <p className='px-2'>Already Registered ?? <button className='btn btn-primary' onClick={loginHandle}>Login</button></p>
                
            </div>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;