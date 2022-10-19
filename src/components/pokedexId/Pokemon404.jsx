import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Pokemon404.css'

const Pokemon404 = () => {
  return (
   <div className='pokemon404'>
      <h1> Pokemon not found 😢 </h1>
      <Link to='/pokedex'>Return to Pokedex</Link>
   </div>
  )
}

export default Pokemon404;