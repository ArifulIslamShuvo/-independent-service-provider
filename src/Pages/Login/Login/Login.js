import React, { useState } from "react";
import "./AuthForm.css";
import GoogleLogo from "../../../imagea/google.svg"
import { useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  //----------handle-reset-Password---------
    const [resetEmail, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, ] = useSendPasswordResetEmail(auth);
   if (resetEmail) {
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }


  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //---------handle-sigin- use-React Firebase Hooks-----
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
    console.log(user);
  }
 
  //------------handle-Logout-Input---------------------

  const handleLogout = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password)
    
  }

  //------------------handle-signInWithGoogle---------------------

  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  let errorMessage;
  if (error1 || error) {
        errorMessage=<div>
          <p className="text-danger">Error: {error1.message}</p>
        </div>
        console.log(errorMessage);
  }
    if(user1){
        navigate('/home')
    }
    if(loading || loading1){
        return <Loading></Loading>
    }
  


  return (
    //---------start-form-container--------------
    <div className='container auth-form-container'>
      <div className='auth-form'>
        <h1 className="text-info m-4">Login</h1>
        <form onSubmit={handleLogout}>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input type='text' name='email' id='email' onChange={(e) => setEmail(e.target.value)}/>
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input type='password' name='password' id='password' />
            </div>
          </div>
          <button type='submit' className='auth-form-submit'>
            Login
          </button>
        </form>
        <p className=' redirect'>
          New to Awesome photography{" "}
          <span onClick={() => navigate("/signup")}>Create New Account</span>
        </p>
        <p className=' redirect'>
          Forget Password {" "}
          <span onClick={async () => {await sendPasswordResetEmail(resetEmail)
          
        }}>Reset Password</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button className='google-auth' onClick={() => signInWithGoogle()}>
            <img src={GoogleLogo} alt='' />
            <p className="mt-3"> Continue with Google </p>
          </button>
        </div>
        {errorMessage}
      </div>
      <ToastContainer></ToastContainer>
    </div>
    
    //----------end-form-container-----------------
  );
};

export default Login;
