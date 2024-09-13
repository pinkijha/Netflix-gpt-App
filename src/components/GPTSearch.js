import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGORUND_IMAGE } from '../utils/Constant'

const GPTSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
      <img className='' src={BACKGORUND_IMAGE}
      alt="bg-img" />
        <div className="absolute inset-0 bg-black/70 "></div>
      </div>

      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GPTSearch
