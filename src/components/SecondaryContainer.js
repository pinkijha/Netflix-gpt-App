import React from 'react'
import MovieList from './MovieList'
import MovieCards from './MovieCards'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    movies.nowPlayingMovies && ( 
   <div className=' px-10 bg-black'>
    <div className='-mt-72 relative z-30'>
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
    <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
    </div>
    </div>
    )
  )
}

export default SecondaryContainer
