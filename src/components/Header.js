import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { LOGO } from '../utils/Constant';
import { toggleSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  

  
  const dispatch = useDispatch();

  // Toggle on GPT Search Button
  const handleGPTSearchClick = () =>{
    dispatch(toggleSearchView());
  }

  const handleSignOut =() =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(
          addUser({
            uid: uid, 
            email: email, 
            displayName: displayName, 
            photoURL: photoURL
          })
        );
       navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);    
  

  return (
    <div className=' flex justify-between w-screen absolute px-8 py-2 z-10 bg-gradient-to-b from-black '>
      <div>
      <img className='w-48 ' src={LOGO} 
      alt="logo" />
      </div>
      {user &&      
      <div className='box-border flex p-2'>
        <button onClick={handleGPTSearchClick} className='py-2 px-4 mx-4 h-10 mt-5 bg-gradient-to-r from-purple-500 to-indigo-500
         hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-300'>
          GPT Search</button>
        <img  className='w-[40px] h-[40px] my-5 mx-2 rounded-2xl'
        src={user?.photoURL} alt='userIcon'
        />
        <button onClick={handleSignOut} className='font-bold text-lg rounded-lg text-white'>Log Out</button>
      </div>
      }
    </div>
  )
}


export default Header;
