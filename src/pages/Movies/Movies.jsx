import css from '../Movies/Movies.module.css';
import { BsSearch } from 'react-icons/bs';

import { useState } from 'react';
import { SearchingMoviesList } from 'components/SearchingMoviesList/SearchingMoviesList';
import { useLocation, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();

    const inputValue = event.currentTarget.elements.searchQuery.value;

    if (inputValue === '') {
      return;
    }

    setQuery(inputValue);
    setSearchParams({ query: inputValue });

    event.currentTarget.reset();
  };

  return (
    <div className={css.moviesSection}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input type="text" name="searchQuery" />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
      {query && <SearchingMoviesList query={query} />}
    </div>
  );
};
