import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function PokemonDetails() {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        setPokemonDetails(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los detalles del Pokémon:', error);
      });
  }, [name]);

  return (
    <div className='resultados'>
      <h2>Detalles del Pokémon: {name}</h2>
      {pokemonDetails ? (
        <div className='resultadosDetalle'>
          <img src={pokemonDetails.sprites.front_default} alt={name} />
          <p>Nombre: {pokemonDetails.name}</p>
          <p>Altura: {pokemonDetails.height}</p>
          <p>Peso: {pokemonDetails.weight}</p>
          {/* Agrega más detalles según la estructura de datos de la API */}
        </div>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  );
}

export default PokemonDetails;
