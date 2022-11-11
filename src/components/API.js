const API_KEY = 'f7ffdce4cad751b792655bd09ea4613c';


export const fetchTrandingMovies = () => fetch(`https://api.themoviedb.org/3//trending/movie/week?api_key=${API_KEY}`).then(response => response.json());