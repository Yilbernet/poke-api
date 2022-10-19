import React from 'react';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header>
      <img className='header__img' src="/assets/home/pokedex.png" alt="pokedex image" />
      <div className='header__red'>
         <div className='header__black'></div>
         <div className='header__circle'>
            <div className='header__circle-int'></div>
         </div>
      </div>
    </header>
  )
}

export default Header;