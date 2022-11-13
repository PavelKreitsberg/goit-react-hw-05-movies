import css from '../TrandingGallery/TrandingGallery.module.css';

import { MovieCard } from 'components/MovieCard/MovieCard';

import { fetchTrandingMovies } from 'services/API';
import { useState } from 'react';
import { useEffect } from 'react';

export const TrandingGallery = () => {
  const [trandingMoviesList, setTrandingMoviesList] = useState([]);

  useEffect(() => {
    fetchTrandingMovies().then(data => setTrandingMoviesList(data.results));
  }, []);

  return (
    <div className={css.TrandingGallery}>
      {trandingMoviesList &&
        trandingMoviesList.map(movie => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
    </div>
  );
};
