import React, { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const { favorites } = useContext(MovieContext);

  if (favorites) {
    return (
      <section className="flex gap-6 flex-wrap justify-center m-6">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </section>
    );
  }

  return (
    <div className="flex justify-center items-center h-100">
      <section className="bg-gray-800 flex justify-center items-center flex-col px-30 py-18">
        <h2 className="text-4xl text-red-700 font-bold mb-3">
          No Favorite Movies Yet
        </h2>
        <p className="text-lg">
          Start adding movies to your favorites and they will appear here!
        </p>
      </section>
    </div>
  );
}
