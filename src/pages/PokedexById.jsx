import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pokemon404 from '../components/pokedexId/Pokemon404';
import Header from '../components/shared/Header';
import '../styles/PokedexById.css';

const PokedexById = () => {

  const {id} = useParams();

  const [pokemon, setPokemon] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err),
        setHasError(true)});
  }, []);
  
  if(hasError){
    return <Pokemon404 />
  }

  return (
    <article className='byId'>
      <Header />
      <header className='byId__header'>
        <div className={`byId__top bg-${pokemon?.types[0].type.name}`}>
          <img
            className='byId__img'
            src={pokemon?.sprites.other['official-artwork'].front_default}
            alt="pokemon image"
          />
        </div>
        <div className={`byId__number letter-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</div>
      </header>
      <section>
        <div className={`byId__title letter-${pokemon?.types[0].type.name}`}>
          <div className='byId__hr'></div>
            <h2 className='byId__name'>{pokemon?.name}</h2>
          <div className='byId__hr'></div>
        </div>
        <div className='byId__measure'>
        <p className='byId__measure__p'>
          <span className='byId__measure__span'>weight </span> {pokemon?.weight}</p>
        <p className='byId__measure__p'>
          <span className='byId__measure__span'>height </span> {pokemon?.height}</p>
        </div>
      </section>
      <section className='byId__characteristics'>
        <div className='byId__characteristics__type'>
          <h3 className='byId__characteristics__type__title'>Type</h3>
          <ul className='byId__characteristics__type__ul'>
            {
              pokemon?.types.map(type => (
                <li className={`byId__characteristics__type__item back-${type.type.name}`}
                  key={type.type.name}>
                  {type.type.name}
                </li>
              ))
            }
          </ul>
        </div>
        <div className='byId__characteristics__skill'>
          <h3 className='byId__characteristics__skill__title'>Skills</h3>
          <ul className='byId__characteristics__skill__ul'>
            {
              pokemon?.abilities.map(ability => (
                <li className='byId__characteristics__skill__item' key={ability.ability.name}>
                  {ability.ability.name}
                </li>
              ))
            }
          </ul>
        </div>
      </section>
      <section className='byId__stats'>
        <h2 className='byId__stats__title'>Stats</h2>
        <ul className='byId__stats__ul'>
          {
            pokemon?.stats.map(stat => (
              <div>
                <li className='byId__stats__item' key={stat.stat.name}>
                  <span className='byId__stats__span'>{stat.stat.name}
                  </span>
                  {stat.base_stat}/150
                </li>
                <div className='byId__stats__item__progress'>
                  <div className='byId__stats__item__progress-bar' style={{width: `${(stat.base_stat/1.5)}%`}} ></div>
                </div>
              </div>
            ))
          }
        </ul>
      </section>
      <section className='byId__movements'>
        <h2 className='byId__movements__title'>Movements</h2>
        <ul className='byId__movements__ul'>
          {
            pokemon?.moves.map(move => (
              <li
                className='byId__movements__item'
                key={move.move.name}>
                  {move.move.name}
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default PokedexById;