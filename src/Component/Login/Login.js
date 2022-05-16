import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorElement;
    let from = location.state?.from?.pathname || '/';

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p>Not matched Pass and Email</p>
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    const loginHandle = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
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
                <p className='text-danger mt-2'>{error ?
                    errorElement : ""
                }</p>

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