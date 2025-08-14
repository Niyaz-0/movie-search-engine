const { VITE_BASE_URL, VITE_MOVIE_API_KEY } = import.meta.env;

console.log('Environment check:', {
  VITE_BASE_URL,
  VITE_MOVIE_API_KEY,
  allEnvVars: import.meta.env
});

export const getPopularMovies = async () => {
  if (!VITE_BASE_URL || !VITE_MOVIE_API_KEY) {
    throw new Error(`Missing environment variables: BASE_URL=${VITE_BASE_URL}, API_KEY=${VITE_MOVIE_API_KEY}`);
  }

  const url = `${VITE_BASE_URL}/movie/popular?api_key=${VITE_MOVIE_API_KEY}`;
  console.log('Fetching URL:', url);
  
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

export const searchMovie = async (query) => {
  if (!VITE_BASE_URL || !VITE_MOVIE_API_KEY) {
    throw new Error(`Missing environment variables: BASE_URL=${VITE_BASE_URL}, API_KEY=${VITE_MOVIE_API_KEY}`);
  }

  const response = await fetch(
    `${VITE_BASE_URL}/search/movie?api_key=${VITE_MOVIE_API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};
