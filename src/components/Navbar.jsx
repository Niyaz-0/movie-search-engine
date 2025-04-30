import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <header className='flex justify-between text-2xl p-3 bg-black text-purple-900 font-bold fixed top-0 right-0 left-0 z-10'>
            <Link to="/">Movie App</Link>
            <nav>
                <Link to="/" className='mr-4'>Home</Link>
                <Link to="/favorites" className='mr-4'>Favorites</Link>
            </nav>
        </header>
    </>
  )
}
