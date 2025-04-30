const { VITE_BASE_URL, VITE_MOVIE_API_KEY } = import.meta.env;

export const getPopularMovies = async () => {
  const response = await fetch(
    `${VITE_BASE_URL}/movie/popular?api_key=${VITE_MOVIE_API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovie = async (query) => {
  const response = await fetch(
    `${VITE_BASE_URL}/search/movie?api_key=${VITE_MOVIE_API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};
