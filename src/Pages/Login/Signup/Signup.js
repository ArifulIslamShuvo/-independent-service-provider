import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import GoogleLogo from "../../../imagea/google.svg"

const Signup = () => {
    const navigate = useNavigate()
  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1 className="text-info m-4">Sign Up</h1>
        <form >
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input type='text' name='email' id='email' />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input type='password' name='password' id='password' />
            </div>
            <div className='input-field'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <div className='input-wrapper'>
              <input type='password' name='confirmPassword'id='confirm-password'/>
            </div>
          </div>
          </div>
          <button type='submit' className='auth-form-submit'>
          Sign Up
          </button>
        </form>
        <p className='redirect'>
        Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button className='google-auth'>
            <img src={GoogleLogo} alt='' />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
