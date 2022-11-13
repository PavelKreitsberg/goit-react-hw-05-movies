import { Link } from 'react-router-dom';
import css from '../MovieCard/MovieCard.module.css';

export const MovieCard = ({ movie }) => {
  const poster = {
    desktop: `https://image.tmdb.org/t/p/w780${movie.poster_path}`,
    tablet: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    mobile: `https://image.tmdb.org/t/p/w342${movie.poster_path}`,
  };

  return (
    <Link to={`/movies/${movie.id}`}>
      <div className={css.MovieCard}>
        <picture className={css.cardImage}>
          <source srcSet={poster.desktop} media="(min-width: 1280px)" />
          <source srcSet={poster.tablet} media="(min-width: 768px)" />
          <source srcSet={poster.mobile} media="(min-width: 320px)" />
          <img
            src={poster.mobile}
            alt={movie.title}
            loading="lazy"
            className={css.cardImage}
          />
        </picture>
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
        <p className={css.rate}>{movie.vote_average.toFixed(1)}</p>
      </div>
    </Link>
  );
};
