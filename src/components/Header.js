import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  
  const dispatch = useDispatch();

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
    <div className=' flex justify-between w-screen absolute px-8 py-2 z-30 bg-gradient-to-b from-black '>
      <div>
      <img className='w-48 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
      alt="logo" />
      </div>
      {user &&      
      <div className='flex'>
        <img  className='w-[40px] h-[40px] my-5 mx-2 rounded-2xl'
        src={user.photoURL} alt='userIcon'
        />
        <button onClick={handleSignOut} className='font-bold text-lg'>Log Out</button>
      </div>
      }
    </div>
  )
}


export default Header
