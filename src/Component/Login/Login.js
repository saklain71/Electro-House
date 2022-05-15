import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Login = () => {
     const navigate = useNavigate();

    const loginHandle = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email , password);
    }

    const RegisterHandle = () => {
        navigate('/register');
    }

    return (
        <div className='border'>
            <h1 className='mb-5 text-primary'>Login Form</h1>
            <div className='shadow-sm  border '>
                <form className='w-50 mx-auto mb-5 mt-5 ' 
                onSubmit={loginHandle}>
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <p className='px-2'>
                    New to Electro House
                    <button className='btn btn-primary ms-2'
                        onClick={RegisterHandle}>
                        Register
                    </button>
                </p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;