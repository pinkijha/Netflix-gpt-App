import { API_OPTIONS } from '../utils/Constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const usePopularMovies = () => {
      // Fetch data from TMDB API and Update Store
      const dispatch = useDispatch();
      const getPopularMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', 
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json.results);
      dispatch(addPopularMovies(json.results))
    }
  
      useEffect(() => {
        getPopularMovies();
      }, []);
}

export default usePopularMovies
