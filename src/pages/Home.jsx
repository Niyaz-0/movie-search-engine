import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovie } from "../services/api";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load the movies!!");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  async function handleSearch(e) {
    e.preventDefault();
    
    if(!searchText.trim()) return
    if(loading) return

    setLoading(true)
    try {
      const searchResults = await searchMovie(searchText)
      setMovies(searchResults);
    } 
    catch (err) {
      console.log(err);
      setError('Failed to search the movie!!')
    } 
    finally {
      setLoading(false);
    }
    
    setSearchText(""); //optional
  }

  return (
    <>
      <div className="flex flex-col">
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center my-5 gap-x-3.5"
        >
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="bg-gray-500 h-11 p-4 pr-24 text-lg rounded-lg"
          />
          <button
            type="submit"
            className="bg-red-600 px-5 py-2 text-lg font-bold rounded-lg">
            Search
          </button>
        </form>

        {error && <div className="flex justify-center items-center text-5xl">{error}</div>}

        {loading ? (
          <div className="flex justify-center items-center text-5xl">Loading...</div>
        ) : (
          <section className="flex gap-6 flex-wrap justify-center">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </section>
        )}
      </div>
    </>
  );
}
