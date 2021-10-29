import React from 'react';
import useAuth from './../../../hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="container">
            <div>
                <div className="container p-5 my-5">
                    <h1>LOGIN <span className="green-color">FROM</span></h1>
                </div>

                <div className="container my-5">
                    <form className="w-50">
                        <div className="mb-3 ">
                            <input type="email" className="form-control " id="" placeholder="Enter Your Email" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="" placeholder="Your Password" />
                        </div>
                        <input type="submit" className="btn green-bg text-white" value="Submit" />
                    </form>
                    <p className="my-1">NEW USER? <Link to="/register">Create Account</Link></p>
                    <div className="my-1">-------or----------</div>
                    <button
                        className="btn green-bg text-white"
                        onClick={handleGoogleLogin}
                    >Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;