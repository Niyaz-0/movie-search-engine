import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
      const storedFavorites = localStorage.getItem('favorites');
      if(storedFavorites) setFavorites(JSON.parse(storedFavorites));
    }, [])
    
    useEffect(() => {
        if(favorites.length > 0) {
            localStorage.setItem('favorites', JSON.stringify(favorites))
        } 
    }, [favorites])

    function addToFavorites(movie) {
        setFavorites(prev => [...prev, movie])
    }

    function removeFromFavorites(movieId) {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    function isFavorite(movieId) {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    }


  return <MovieContext.Provider value={value}>
    {children}
    </MovieContext.Provider>
};
