import { MovieCard } from 'components/MovieCard/MovieCard';

const movie = {
  adult: false,
  backdrop_path: '/7ABsaBkO1jA2psC8Hy4IDhkID4h.jpg',
  genre_ids: [28, 12, 14, 878],
  id: 19995,
  original_language: 'en',
  original_title: 'Avatar',
  overview:
    'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
  popularity: 664.299,
  poster_path: '/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
  release_date: '2009-12-15',
  title: 'Avatar',
  video: false,
  vote_average: 7.5,
  vote_count: 26493,
};

export const Movies = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
