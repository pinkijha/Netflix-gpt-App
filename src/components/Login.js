import React, { useState } from 'react';
import Header from "./Header"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className='relative'>
        <Header/>
      <div className='absolute'>
      <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg' 
      alt="bg-img" />
        <div className="absolute inset-0 bg-black/60 "></div>
      </div>

      <div className='relative  flex justify-center '>
        <form className='absolute top-28 bg-black p-12'>

            <h1 className='text-white m-4 text-3xl font-bold'>
              {isSignInForm ? "Sign In" : "Sign up" }</h1>

            <div className='m-4'><input className='mt-2 w-full py-3 px-12
             rounded bg-black border border-grayText focus:border-white' 
             type='text' placeholder='Email or mobile number'/>
            </div>

            <div className='m-4 '><input className='w-full py-3 px-7 rounded bg-black border border-grayText  focus:border-white'  type='password' placeholder='Password'/>
            </div>

            <div className='m-4'><button className=' bg-netflixRed font-medium text-white w-full py-3 px-7 rounded'>
            {isSignInForm ? "Sign In" : "Sign up" }</button>
              </div>

              <p className='text-zinc-300 text-center'>OR</p>

              <div className='m-4'><button className=' bg-gray/70 font-medium text-white w-full py-3 px-7 rounded'>
              Use a sign-in code</button>
              </div>

              <div className=' text-center'><a href=' ' className='text-white'>Forgot password?</a></div>

              <div className='m-4'><input type='checkbox' /> <label className='text-white'>Remember me</label></div>

              <div className='m-4'><span className='text-zinc-400 mr-1'> {isSignInForm ? "New to Netflix?" : "Already have account?" }</span>
                <button type='button' onClick={toggleSignInForm}  className='font-medium text-white'>{isSignInForm ? "Sign up" : "Sign In" }</button></div>

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
