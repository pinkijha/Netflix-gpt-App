import React, { useRef, useState } from 'react';
import Header from "./Header"
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR, BACKGORUND_IMAGE } from '../utils/Constant';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () =>{
    // Validate the form data
    const msg = checkValidData(name, email.current.value, password.current.value);
    setErrorMessage(msg);
    if(msg) return;

    // console.log(msg)
    // console.log(email.current.value);
    // console.log(password.current.value); 
    // console.log(name.current.value) 

    //sign in / Sign Up
    if(!isSignInForm)
    {
      // SignUp
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName:  name.current.value,
       photoURL: USER_AVATAR
    }).then(() => {
      // Profile updated!
      const {uid, email, displayName, photoURL} = auth.currentUser;
      dispatch(
        addUser({
          uid: uid, 
          email: email, 
          displayName: displayName, 
          photoURL: photoURL
        })
      );
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.msg);
    });
    // console.log(user);
    

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " - " + errorMessage);
  });

    }
    else {
      // SignIn

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    // console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " - " + errorMessage);
  });

    }
  };

  return (
    <div className='relative'>
        <Header/>
      <div className='absolute'>
      <img className='' src={BACKGORUND_IMAGE}
      alt="bg-img" />
        <div className="absolute inset-0 bg-black/60 "></div>
      </div>

      <div className='relative  flex justify-center'>
        <form onSubmit={(e) => e.preventDefault()} className=' w-[450px] absolute top-28 bg-black p-8'>

            <h1 className='text-white m-4 text-3xl font-bold'>
              {isSignInForm ? "Sign In" : "Sign up" }</h1>

              {!isSignInForm && (<div className='m-4 '><input ref={name} className='mt-2 w-full py-3 px-7 
              rounded bg-black text-white border border-grayText  focus:border-white'  
              type='text' placeholder='Full Name'/>
                </div>)}

            <div className='m-4'><input className='mt-2 w-full py-3 px-7
             rounded bg-black text-white border border-grayText focus:border-white' 
             type='text' ref={email} placeholder='Email or mobile number'/>
            </div>

            <div className='m-4 '><input ref={password} className='w-full py-3 px-7 
            rounded bg-black text-white border border-grayText  focus:border-white'  type='password' placeholder='Password'/>
            </div>            
            <p className=' m-4 text-red-600  text-md'> {errorMessage}</p>

            <div className='m-4'><button onClick={handleButtonClick}  className=' bg-netflixRed 
            font-medium text-white w-full py-3 px-7 rounded'>
            {isSignInForm ? "Sign In" : "Sign up" }</button>
              </div>

              <p className='text-zinc-300 text-center'>OR</p>

              <div className='m-4'><button className=' bg-gray/70 font-medium text-white w-full py-3 px-7 rounded'>
              Use a sign-in code</button>
              </div>

              <div className=' text-center'><a href=' ' className='text-white'>Forgot password?</a></div>

              <div className='m-4'><input type='checkbox' /> <label className='text-white'>Remember me</label></div>

              <div className='m-4'><span className='text-zinc-400 mr-1'> {isSignInForm ? "New to Netflix?" : "Already have account?" }</span>
                <button type='button' onClick={toggleSignInForm}  
                className='font-medium text-white'>{isSignInForm ? "Sign up" : "Sign In" }</button></div>

                <small className='text-white m-4'>
                This page is protected by Google reCAPTCHA 
                <span className="block m-4">to ensure you're not a bot.<a href=" " className='text-blue-600  m-4'>Learn more</a></span>
              </small>

        </form>
      </div>
    </div>
  )
}

export default Login
