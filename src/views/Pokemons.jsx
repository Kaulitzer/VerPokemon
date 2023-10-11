import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function Pokemons() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState('');

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50')
      .then((response) => {
        setPokemonData(response.data.results);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de los Pokémon:', error);
      });
  }, []);

  const redirectToPokemonDetails = () => {
    navigate(`/pokemons/${selectedPokemon}`);
  };

  return (
    <div className='lista'>
      <h2>Lista de Pokémon</h2>
      <select value={selectedPokemon} onChange={(e) => setSelectedPokemon(e.target.value)}>
        <option value="">Selecciona un Pokémon</option>
        {pokemonData && pokemonData.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button onClick={redirectToPokemonDetails}>Ver detalles</button>
    </div>
  );
}

export default Pokemons;
