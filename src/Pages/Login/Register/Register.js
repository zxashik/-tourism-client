import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className="container">
            <div className="my-5">
                <div className="container p-5 my-5">
                    <h1>Register: <span className="green-color">Create An Account</span></h1>
                </div>
                <form onSubmit="" className="w-50 mb-1">
                    <div className="mb-3 ">
                        <input type="email" className="form-control " id="" placeholder="Enter Your Email" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="" placeholder="Your Password" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="" placeholder="Re-enter Your Password" />
                    </div>
                    <input type="submit" className="btn green-bg text-white" value="Submit" />
                </form>
                <p className="mb-2">Already have an account? <Link to="/login">Login</Link></p>

            </div>
        </div>
    );
};

export default Register;