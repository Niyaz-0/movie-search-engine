import React from 'react'
import { useContext } from 'react'
import { MovieContext } from '../../contexts/MovieContext'

export default function MovieCard({movie}) {

  const { isFavorite, addToFavorites, removeFromFavorites } = useContext(MovieContext)

  const favorite = isFavorite(movie.id);

  const onFavoriteClicked = (e) => {
    e.preventDefault();

    if(favorite) removeFromFavorites(movie.id)
    else addToFavorites(movie)

  }

  return (
    <>
        <div className='bg-slate-900 w-52 h-100 relative rounded-lg hover:-translate-y-1.5 transition-transform duration-150 hover:opacity-80 p-[1px]'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='rounded-lg object-cover h-80'/>
            <div className='pl-2.5 pt-2'>
                <h2 className='text-[16px] mb-1 font-light'>{movie.title}</h2>
                <p className='text-xs'>{movie.release_date?.split("-")[0]}</p>
                <button className={`absolute top-2 right-2  text-4xl opacity-0 hover:opacity-100 transition-opacity duration-200 ${favorite ? 'text-red-500' : 'text-white' }`} onClick={onFavoriteClicked}>♥</button>
            </div>
        </div>
    </>
  )
}
