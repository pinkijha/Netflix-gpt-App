import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants'

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='pt-[8%] flex justify-center'>
      <form onSubmit={(e) => e.preventDefault()} className='grid grid-cols-12 w-1/2'>
        <input className='col-span-10 p-4 m-4 rounded-lg
         focus:border-blue-700 focus:outline-none focus:ring-2 shadow-md shadow-slate-400
          focus:ring-blue-700
        ' type='text' placeholder={lang[langKey].gptSearchPlaceholder} />
        <button className='col-span-2 my-4 bg-red-700 border-white border-solid
         text-white border-2 px-4 py-2
         hover:bg-red-700 hover:text-white  shadow-lg shadow-slate-500 rounded-lg'>
            {lang[langKey].search}
            </button>
      </form>
    </div>
  )
}

export default GptSearchBar
