import css from '../NavBar/NavBar.module.css';

export const NavBar = () => {
  return (
    <ul className={css.NavBar}>
      <li className={css.NavBar__item}>Home</li>
      <li className={css.NavBar__item}>Movies</li>
    </ul>
  );
};
