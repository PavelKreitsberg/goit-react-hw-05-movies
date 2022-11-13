import { Route, Routes, NavLink } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { NotFound } from 'pages/NotFound/NotFound';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Cast } from 'components/MovieDetails/Cast/Cast';
import { Reviews } from 'components/MovieDetails/Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <nav className="navigation">
        <NavLink className="navigation__item" to="/">
          Home
        </NavLink>
        <NavLink className="navigation__item" to="/movies">
          Movies
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
