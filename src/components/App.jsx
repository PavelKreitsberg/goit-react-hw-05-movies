import { Route, Routes, NavLink } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { NotFound } from 'pages/NotFound/NotFound';

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
