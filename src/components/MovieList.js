import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title, movies}) => {
  // console.log(movies);
  return (
    <div className='px-6 text-white'>
      <h1 className='pt-5 text-xl px-4 font-bold'>{title}</h1>

      <div className='flex overflow-hidden hover:overflow-x-scroll p-4'>
      <div className='flex'>
        {movies?.map((movie) => (        
      <MovieCards key={movie.id} posterPath={movie.poster_path} />
      ))}
      </div>
      </div>

    </div>
  )
}

export default MovieList
