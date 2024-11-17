import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../providers/Authprovider';

const Register = () => {

    const navigate = useNavigate();
    const {createUser}=useContext(AuthContext);

    const handleRegister = event=>{
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name,email,password);

        createUser(email,password)
        .then(result=>{
          console.log(result.user,'wow');
          event.target.reset();
          navigate('/');
        })
        .then(error=>{
          console.log('Error', error.message);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p className='text-center text-orange-500'>If you've not any account . Go to <Link to="/login" >LogIn</Link> </p>
        
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;