import css from '../SearchingMoviesList/SearchingMoviesList.module.css';

import { fetchMovieByQuery } from '../../services/API';

import { MovieCard } from 'components/MovieCard/MovieCard';

import { useState } from 'react';
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

export const SearchingMoviesList = ({ query, state }) => {
  const [movies, setMovies] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    fetchMovieByQuery(query).then(response => setMovies(response.results));
  }, [query]);

  return (
    <div className={css.moviesList}>
      {movies.length > 0 &&
        movies.map(movie => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
    </div>
  );
};
