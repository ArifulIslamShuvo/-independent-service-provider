import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import GoogleLogo from "../../../imagea/google.svg";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" });


    //----------------------------------------------

    const handleEmail = (emailInput) => {
        if (/\S+@\S+\.\S+/.test(emailInput)) {

            setEmail({ value: emailInput, error: "" });
        }
        else {
            setEmail({ value: "", error: "Invalid email" });
        }
    }

    //---------------------------------------------------------

    const handlePassword = (passwordInput) => {
        if (passwordInput.length < 6) {
            setPassword({ value: '', error: "password min 6 character" });
        } else {
            setPassword({ value: passwordInput, error: "" });
        }
    }
    //-------------------------------------------------------------------
    const handlesetConfirmPassword = (confirmPasswordInput) => {
        if (confirmPasswordInput === password.value) {
            setConfirmPassword({ value: confirmPasswordInput, error: "" });
        }
        else {
            setConfirmPassword({ value: "", error: "Password Mismatched" });
        }
    }
    
    //-------------------------------------------------------------------
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if(user){
        navigate('/home');
        console.log(user);
    }
    
    //------------------------------------------------------------
    const handleLogout = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    //---------------------------------------------------------------
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
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h1 className="text-info m-4">Sign Up</h1>
                <form onSubmit={handleLogout}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input onBlur={(event) => handleEmail(event.target.value)} type='text' name='email' id='email' />
                        </div>
                        {
                            email?.error && <p style={{ color: 'red', textAlign: 'center', marginTop: '2px' }}>{email.error}</p>
                        }
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input onBlur={(event) => handlePassword(event.target.value)} type='password' name='password' id='password' />
                        </div>
                        {
                            password?.error && <p style={{ color: 'red', textAlign: 'center', marginTop: '2px' }}>{password.error}</p>
                        }
                        <div className='input-field'>
                            <label htmlFor='confirm-password'>Confirm Password</label>
                            <div className='input-wrapper'>
                                <input onBlur={(event) => handlesetConfirmPassword(event.target.value)} type='password' name='confirmPassword' id='confirm-password' />
                            </div>
                        </div>
                        {
                            confirmPassword?.error && <p style={{ color: 'red', textAlign: 'center', marginTop: '2px' }}>{confirmPassword.error}</p>
                        }
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
                    <button className='google-auth' onClick={() => signInWithGoogle()}>
                        <img src={GoogleLogo} alt='' />
                        <p> Continue with Google </p>
                    </button>
                </div>
                {errorMessage}
            </div>
        </div>
    );
};

export default Signup;
