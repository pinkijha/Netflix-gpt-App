import React from 'react';
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";




const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 w-1/3 text-md'>{overview}</p>
      <div className='flex'>
        <button className='flex items-center  gap-2  space-x-2 mr-3 border-transparent  bg-white text-black 
        shadow-lg py-2 px-10 font-bold text-lg transition-transform transform hover:scale-105 ease-in-out 
        duration-300 rounded-lg'><FaPlay />Play</button>
        <button className='flex items-center  gap-2 space-x-2 shadow-lg border-slate-800 text-white
         bg-zinc-500/50 py-2 px-10 text-lg font-bold rounded-lg transition-transform transform hover:scale-105 ease-in-out 
         duration-300'><IoMdInformationCircleOutline /> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
