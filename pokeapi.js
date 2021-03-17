import './timer.css';
import React, {useEffect, useState } from 'react';

const Timer = () => {
  //hooks
  const [pokemon, setPokemon] = useState('');
  const [pokemonList, setPokemons] = useState([]);

  //funcs
  const lookForPokeType = async (type) => {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    let data = await response.json();
    data = data.pokemon;
    data = data.map((pok) => { return { name: pok.pokemon.name, url: pok.pokemon.url } });
    const list = [];
    for (const pokemon of data) {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      list.push(<p>{pokemon.name} <img src={data.sprites.front_default} alt=''></img> </p>)
    }
    setPokemons(list);
  }

  const lookForRamdonPoke = async () => {
    const pokemonId = Math.floor(Math.random() * 500);
    await lookForPoke(pokemonId);
  }

  const lookForPoke = async (pokemonId) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await response.json();
    setPokemon(data);
  }

  const mostrar = { name: pokemon.name, sprite: pokemon.sprites };
  let imges;
  if (pokemon) {
    imges = [
      <img key='1' src={mostrar.sprite.back_default} alt=''></img>,
      <img key='2' src={mostrar.sprite.back_shiny} alt=''></img>,
      <img key='3' src={mostrar.sprite.front_default} alt=''></img>,
      <img key='4' src={mostrar.sprite.front_shiny} alt=''></img>];
  }

  return (
    <div className="app">
      <div className='time'>
        {mostrar ? mostrar.name : ''}
      </div>
      <div>
        {imges}
      </div>
      <div className="row">
        <button onClick={lookForRamdonPoke}
          className='button button-primary'>
          Buscar Ramdon
        </button>
      </div>

      <div className="row">
        <div className='time'>
          Buscar Tipo
        </div>
        <button onClick={() => lookForPokeType('ground')}
          className='button button-primary'>
          Tierra
        </button>
        <button onClick={() => lookForPokeType('fire')}
          className='button button-primary'>
          Fuego
        </button>
        <button onClick={() => lookForPokeType('ghost')}
          className='button button-primary'>
          Fantasma
        </button>
        <div>
          {pokemonList}
        </div>
      </div>

    </div >
  );
}

export default Timer;