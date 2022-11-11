import { TrandingGallery } from 'components/TrandingGallery/TrandingGallery';

import css from '../Home/Home.module.css';

export const Home = () => {
  return (
    <div className={css.Home}>
      <h1>Trending today</h1>
      <TrandingGallery />
    </div>
  );
};
